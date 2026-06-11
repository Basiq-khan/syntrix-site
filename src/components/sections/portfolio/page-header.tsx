import { Link } from 'react-router-dom'

export function PortfolioPageHeader() {
  return (
    <section className="w-full bg-[#000219] pt-35 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden min-h-[70vh] flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5">
        <h1 className="font-['Anton'] font-normal text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] uppercase tracking-wide text-white">
          Portfolio
        </h1>

        <div className="flex items-center gap-3 font-['Anton'] text-[12px] sm:text-[14px] uppercase tracking-[0.3em]">
          <Link to="/" className="text-white/60 hover:text-[#D4FF00] transition-colors duration-300">
            Home
          </Link>
          <span className="text-[#FD683E]">/</span>
          <span className="text-[#D4FF00]">Portfolio</span>
        </div>
      </div>
    </section>
  )
}
