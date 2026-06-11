import { Lightbulb, MonitorSmartphone, Megaphone, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Lightbulb,
    title: 'Brand Building & Strategy.',
    description: 'Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
    variant: 'dark' as const,
  },
  {
    icon: MonitorSmartphone,
    title: 'Creative Digital Solution.',
    description: 'Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
    variant: 'highlight' as const,
  },
  {
    icon: Megaphone,
    title: 'Marketing & Campaign.',
    description: 'Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
    variant: 'dark' as const,
  },
]

export function AboutServices() {
  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-355 mx-auto flex flex-col gap-12 md:gap-16">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <div className="flex gap-2 items-center">
              <img
                src="/icons/2-PNG.png.png"
                alt="Star Icon"
                className="w-7 h-7 object-contain animate-spin brightness-0"
                style={{ animationDuration: '3s' }}
              />
              <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-[#3C222D] uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-['Anton'] font-normal text-[32px] sm:text-[48px] md:text-[60px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
              Specialize in <span className="text-[#FD683E]">Unique Solution</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:max-w-[380px] lg:pb-2">
            <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] leading-relaxed text-[#1A1A1A]/70 font-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aptent malesuada sit conubia tincidunt iaculis faucibus arcu et aliquet ad amet.
            </p>
            <Link
              to="/contact"
              className="self-start inline-flex items-center justify-center gap-3 font-['Anton'] font-normal text-[13px] sm:text-[14px] text-[#3C222D] bg-transparent border-2 border-[#FD683E] px-6 py-3 uppercase tracking-widest hover:bg-[#FD683E] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            const isHighlight = service.variant === 'highlight'
            return (
              <div
                key={service.title}
                className={`group p-6 sm:p-8 flex flex-col justify-between gap-10 min-h-[280px] sm:min-h-[320px] transition-all duration-300 ${isHighlight
                  ? 'bg-[#EBF264] text-[#1A1A1A]'
                  : 'bg-[#262626] text-white hover:bg-[#2e2e2e]'
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${isHighlight ? 'bg-[#3C222D] text-[#EBF264]' : 'bg-[#EBF264] text-[#1A1A2E]'
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transform group-hover:rotate-45 transition-transform duration-300 ${isHighlight ? 'bg-[#FD683E] text-white' : 'bg-[#D4FF00] text-[#1A1A2E]'
                      }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-['Anton'] font-normal text-[24px] sm:text-[28px] leading-tight uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className={`font-['Inter_Variable'] text-[14px] leading-relaxed font-light max-w-xs ${isHighlight ? 'text-[#1A1A1A]/70' : 'text-white/70'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
