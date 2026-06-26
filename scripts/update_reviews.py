#!/usr/bin/env python3
"""
Script de mise a jour automatique des avis Google pour Fortis Renovation.
Recupere la note et le nombre d'avis depuis l'API Google Places,
puis met a jour tous les fichiers du repo Next.js.

Usage: python scripts/update_reviews.py
Requis: GOOGLE_PLACES_API_KEY en variable d'environnement
"""

import os
import re
import sys
import json
import subprocess
import urllib.request
import urllib.parse
from pathlib import Path

# --- Configuration ---
PLACE_NAME = "Fortis Renovation"
PLACE_LOCATION = "Rouen, France"
REPO_ROOT = Path(__file__).parent.parent

FILES_TO_UPDATE = [
    "components/AvisC.tsx",
    "components/StatsA.tsx",
    "components/HeroA.tsx",
    "app/a-propos/page.tsx",
]
# Toutes les pages plombier-*/page.tsx (incluant les futures pages)
FILES_TO_UPDATE += [str(p.relative_to(REPO_ROOT)) for p in REPO_ROOT.glob("app/plombier-*/page.tsx")]


def get_place_id(api_key: str) -> str:
    """Recherche le Place ID de Fortis Renovation via l'API Google Places."""
    query = urllib.parse.quote(f"{PLACE_NAME} {PLACE_LOCATION}")
    url = (
        f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
        f"?input={query}&inputtype=textquery&fields=place_id,name&key={api_key}"
    )
    with urllib.request.urlopen(url) as resp:
        data = json.loads(resp.read())
    candidates = data.get("candidates", [])
    if not candidates:
        raise RuntimeError(f"Aucun resultat pour '{PLACE_NAME}' dans Google Places")
    place_id = candidates[0]["place_id"]
    print(f"Place ID trouve : {place_id} ({candidates[0].get('name', '')})")
    return place_id


def get_reviews(api_key: str, place_id: str) -> tuple[float, int]:
    """Retourne (note_moyenne, nombre_avis) depuis l'API Google Places Details."""
    url = (
        f"https://maps.googleapis.com/maps/api/place/details/json"
        f"?place_id={place_id}&fields=rating,user_ratings_total&key={api_key}"
    )
    with urllib.request.urlopen(url) as resp:
        data = json.loads(resp.read())
    result = data.get("result", {})
    rating = result.get("rating")
    total = result.get("user_ratings_total")
    if rating is None or total is None:
        raise RuntimeError(f"Donnees manquantes dans la reponse Places API : {result}")
    print(f"Google Reviews : {rating}/5 - {total} avis")
    return float(rating), int(total)


def update_file(filepath: Path, new_rating: float, new_count: int) -> bool:
    """Met a jour les valeurs dans un fichier. Retourne True si modifie."""
    if not filepath.exists():
        print(f"Fichier introuvable : {filepath}")
        return False

    content = filepath.read_text(encoding="utf-8")
    original = content

    # Patterns pour remplacer la note X/5
    content = re.sub(r"Notes+d+(?:[.,]d+)?/5", f"Note {new_rating}/5", content)
    content = re.sub(
        r"(d+(?:[.,]d+)?)s*/s*5(?=s*(?:surs*Google|[·]s|s*[—]s|s*[(]))",
        lambda m: f"{new_rating}/5",
        content,
    )

    # Patterns pour remplacer le nombre d'avis
    content = re.sub(r"d+s+avis", f"{new_count} avis", content)

    if content != original:
        filepath.write_text(content, encoding="utf-8")
        print(f"  Mis a jour : {filepath.relative_to(REPO_ROOT)}")
        return True
    else:
        print(f"  Aucun changement : {filepath.relative_to(REPO_ROOT)}")
        return False


def git_commit_push(rating: float, count: int):
    """Fait un commit et push si des fichiers ont change."""
    result = subprocess.run(
        ["git", "status", "--porcelain"], capture_output=True, text=True, cwd=REPO_ROOT
    )
    if not result.stdout.strip():
        print("Aucun changement a commiter.")
        return
    subprocess.run(
        ["git", "config", "user.email", "github-actions@github.com"],
        cwd=REPO_ROOT, check=True,
    )
    subprocess.run(
        ["git", "config", "user.name", "GitHub Actions"],
        cwd=REPO_ROOT, check=True,
    )
    subprocess.run(["git", "add", "-A"], cwd=REPO_ROOT, check=True)
    subprocess.run(
        ["git", "commit", "-m", f"chore: avis Google - {rating}/5 {count} avis"],
        cwd=REPO_ROOT, check=True,
    )
    subprocess.run(["git", "push"], cwd=REPO_ROOT, check=True)
    print(f"Commit et push effectues ({rating}/5 - {count} avis)")


def main():
    api_key = os.environ.get("GOOGLE_PLACES_API_KEY")
    if not api_key:
        print("GOOGLE_PLACES_API_KEY manquant.")
        sys.exit(1)

    print("Recherche de la fiche Google Business...")
    place_id = get_place_id(api_key)

    print("Recuperation des avis...")
    rating, count = get_reviews(api_key, place_id)

    print(f"Mise a jour des fichiers ({len(FILES_TO_UPDATE)} fichiers)...")
    changed = False
    for rel_path in FILES_TO_UPDATE:
        if update_file(REPO_ROOT / rel_path, rating, count):
            changed = True

    if changed:
        print("Commit + push...")
        git_commit_push(rating, count)
    else:
        print("Tous les fichiers sont deja a jour.")


if __name__ == "__main__":
    main()
