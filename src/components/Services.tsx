const services = [
  {
    num: '01',
    title: 'Brand Identity',
    desc: 'Logo design, visual systems, color palettes, and brand guidelines that give your business a coherent and memorable presence.',
    tags: ['Logo', 'Guidelines', 'Color Systems'],
  },
  {
    num: '02',
    title: 'Editorial & Print',
    desc: 'Magazine layouts, books, catalogs, and printed collateral designed with strong typographic hierarchy and grid systems.',
    tags: ['Layout', 'Typography', 'Print Production'],
  },
  {
    num: '03',
    title: 'Packaging Design',
    desc: 'Structural and surface packaging design from concept to dieline, creating shelf presence that tells a product story.',
    tags: ['Dielines', 'Illustration', 'Mockups'],
  },
  {
    num: '04',
    title: 'Art Direction',
    desc: 'Creative direction for campaigns, photoshoots, and visual storytelling that maintains consistency across every touchpoint.',
    tags: ['Campaigns', 'Photo Direction', 'Concept'],
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-10 bg-[#131210]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e85d2c]">What I do</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            Services
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {services.map((s) => (
            <div
              key={s.num}
              className="group py-8 md:py-10 grid md:grid-cols-12 gap-6 md:gap-8 items-center hover:bg-white/[0.02] transition-colors duration-500 reveal cursor-default"
              data-hover
            >
              <div className="md:col-span-1 font-display text-sm text-[#e85d2c] font-semibold">
                {s.num}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-[#a8a298] leading-relaxed">{s.desc}</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-[#8a847c]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
