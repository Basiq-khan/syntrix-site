export function Marquee() {

    return (

<div className="absolute top-212.5 left-0 right-0 z-50">
        <div
          className="bg-[#EAF261]  sm:py-5 flex items-center whitespace-nowrap"
          style={{
            transform: 'rotate(2deg) translateY(18px)',
            transformOrigin: 'center',
            marginLeft: '-20px',
            marginRight: '-20px',
          }}
        >
          <div className="animate-ticker flex items-center gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="ml-65 font-['Anton'] text-[24px] sm:text-[46px] text-[#1A1A2E] uppercase tracking-wider">Web Design</span>
                <img src="/icons/Vector.png" alt="" className="w-3 h-3 sm:w-14 sm:h-14" />
                <span className="font-['Anton'] text-[14px] sm:text-[46px] text-[#1A1A2E] uppercase tracking-wider">Development</span>
                <img src="/icons/Vector.png" alt="" className="w-3 h-3 sm:w-14 sm:h-14" />
                <span className="font-['Anton'] text-[14px] sm:text-[46px] text-[#1A1A2E] uppercase tracking-wider">SEO</span>
                <img src="/icons/Vector.png" alt="" className="w-3 h-3 sm:w-14 sm:h-14" />
                <span className="font-['Anton'] text-[14px] sm:text-[46px] text-[#1A1A2E] uppercase tracking-wider">Marketing</span>
                <img src="/icons/Vector.png" alt="" className="w-3 h-3 sm:w-14 sm:h-14" />
                <span className="mr-8 font-['Anton'] text-[14px] sm:text-[46px] text-[#1A1A2E] uppercase tracking-wider">Branding</span>
                <img src="/icons/Vector.png" alt="" className="w-3 h-3 sm:w-14 sm:h-14 " />
              </span>
            ))}
          </div>
        </div>
      </div>
    )

        }