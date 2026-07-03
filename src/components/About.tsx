export function About() {
  const stats = [
    { value: '2+', label: 'Years\nstudy & practice' },
    { value: '20+', label: 'Design\nprojects' },
    { value: '∞', label: 'Drive to\nexcel' },
  ]

  return (
    <section id="about" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#e85d2c]">About</span>
            <div className="mt-8 w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#1a1917] relative group">
              <img
                src="https://i.ibb.co.com/V0nw2R4R/saya.jpg"
                alt="Rivaldo"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-xl font-semibold">Rivaldo</p>
                <p className="text-sm text-[#8a847c]">Information Systems · South Tangerang</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center reveal">
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Where{' '}
              <span className="italic text-[#e85d2c]">information systems</span>{' '}
              meet visual design
            </h2>

            <p className="mt-8 text-[#a8a298] text-lg leading-relaxed max-w-xl">
              I am a graphic designer with a background in Information Systems — a foundation that fuses creative thinking with analytical precision. My approach combines structured problem-solving with a keen eye for visual storytelling, allowing me to craft designs that are not only aesthetically compelling but also strategically sound.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.value} className="border-t border-white/10 pt-4">
                  <p className="font-display text-4xl md:text-5xl font-bold text-[#f5f1ea]">{s.value}</p>
                  <p className="mt-2 text-xs text-[#8a847c] whitespace-pre-line leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
