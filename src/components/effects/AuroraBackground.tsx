export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 left-1/4 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[90px]" />
      <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-purple/30 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-secondary/10 blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(239,68,68,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.22) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 15%, transparent 70%)',
        }}
      />
    </div>
  )
}
