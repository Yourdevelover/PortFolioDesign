export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#e85d2c] flex items-center justify-center">
            <span className="font-display font-bold text-white text-sm">R</span>
          </div>
          <span className="font-display text-base font-semibold">Studio Rivaldo</span>
        </div>
        <p className="text-xs text-[#5a5650]">
          © {new Date().getFullYear()} Studio Rivaldo · Designed & built with care in Jakarta
        </p>
        <a href="#top" className="text-xs text-[#8a847c] hover:text-[#e85d2c] transition-colors" data-hover>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
