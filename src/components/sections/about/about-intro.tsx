import { Award, Globe2, Gem, Leaf, Zap, Triangle, Feather, ShieldCheck, BellRing, Sparkle } from 'lucide-react'

const features = [
  { icon: Award, label: 'Over 10 Years of Experience' },
  { icon: Globe2, label: 'Trusted by Global Brands' },
]

const strip = [Gem, Sparkle, Leaf, Zap, Triangle, Feather, ShieldCheck, BellRing]

export function AboutIntro() {
  return (
    <section
      className="w-full text-[#3C222D] overflow-hidden"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-355 mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-2">
              <img
                src="/icons/2-PNG.png.png"
                alt="Star Icon"
                className="w-8 h-8 object-contain animate-spin brightness-0"
                style={{ animationDuration: '3s' }}
              />
              <span className="font-['Anton'] font-normal text-[20px] tracking-widest uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="font-['Anton'] font-normal text-[40px] sm:text-[56px] xl:text-[72px] leading-[1.05] uppercase tracking-tight">
              Creativity <span className="text-[#FD683E]">Meets</span> <br /> Strategy.
            </h2>

            <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] text-[#1A1A1A]/80 leading-relaxed font-light max-w-[460px]">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3C222D] text-[#D4FF00] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-['Anton'] font-normal text-[16px] sm:text-[20px] md:text-[24px] uppercase tracking-wide">
                      {feature.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <a
              href="/about"
              className="self-start mt-2 inline-flex items-center justify-center gap-3 font-['Anton'] text-[14px] text-[#3C222D] bg-transparent border-2 border-[#FD683E] px-6 py-3 uppercase tracking-wider hover:bg-[#FD683E] hover:text-white transition-all duration-300"
            >
              About Us
            </a>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute w-[80%] h-[80%] border-black border-6 bg-[#FD683E] rounded-sm bottom-0 right-0 translate-x-3 translate-y-3 z-0"></div>
            <div className="relative z-10 w-full h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden rounded-sm">
              <img
                src="/woman-with-curly-hair-enjoying-a-smoothie-on-a-sun-88Z62G9-800x533.jpg.png"
                alt="Creativity Meets Strategy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Icon Strip */}
      <div className="w-full bg-[#3C222D] py-8 sm:py-10">
        <div className="max-w-355 mx-auto px-4 sm:px-6 md:px-10 flex flex-wrap items-center justify-between gap-8 sm:gap-6">
          {strip.map((Icon, idx) => (
            <Icon key={idx} className="w-7 h-7 sm:w-8 sm:h-8 text-[#D4FF00] shrink-0" />
          ))}
        </div>
      </div>
    </section>
  )
}
