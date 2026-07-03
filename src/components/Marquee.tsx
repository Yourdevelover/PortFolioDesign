const items = [
  'Branding',
  'Editorial',
  'Packaging',
  'Typography',
  'Poster Design',
  'Art Direction',
  'Illustration',
  'Motion Identity',
]

export function Marquee() {
  return (
    <div className="relative py-8 border-y border-white/5 overflow-hidden bg-[#131210]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="font-display text-3xl md:text-5xl font-medium text-[#f5f1ea]/90">{item}</span>
            <span className="w-3 h-3 rounded-full bg-[#e85d2c]" />
          </div>
        ))}
      </div>
    </div>
  )
}
