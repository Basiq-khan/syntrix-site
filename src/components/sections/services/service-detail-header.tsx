import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  to?: string
}

interface ServiceDetailHeaderProps {
  title: string
  crumbs: Crumb[]
}

export function ServiceDetailHeader({ title, crumbs }: ServiceDetailHeaderProps) {
  return (
    <section className="w-full bg-[#000219] pt-35 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden min-h-[70vh] flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 max-w-4xl">
        <h1 className="font-['Anton'] font-normal text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] uppercase tracking-wide text-white">
          {title}
        </h1>

        <div className="flex items-center flex-wrap justify-center gap-3 font-['Anton'] text-[12px] sm:text-[14px] uppercase tracking-[0.3em]">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`} className="flex items-center gap-3">
              {index > 0 && <span className="text-[#FD683E]">/</span>}
              {crumb.to ? (
                <Link to={crumb.to} className="text-white/60 hover:text-[#D4FF00] transition-colors duration-300">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#D4FF00]">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
