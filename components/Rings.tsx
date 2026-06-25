export default function Rings({ className = '' }: { className?: string }) {
  return (
    <div className={`rings ${className}`.trim()} aria-hidden="true">
      <svg viewBox="-200 -200 400 400" preserveAspectRatio="xMidYMid meet">
        <g className="rings-base">
          <circle r="52" strokeOpacity={0.16} />
          <circle r="98" strokeOpacity={0.12} />
          <circle r="146" strokeOpacity={0.085} />
          <circle r="196" strokeOpacity={0.06} />
        </g>
        <circle className="rings-ripple" r="60" />
        <circle className="rings-ripple" r="60" style={{ animationDelay: '2.3s' }} />
        <circle className="rings-ripple" r="60" style={{ animationDelay: '4.6s' }} />
      </svg>
    </div>
  )
}
