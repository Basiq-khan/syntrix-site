import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="z-50 relative w-full overflow-hidden pt-17.5 md:pt-12 text-black"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      {/* Container height screen size ke hisab se dynamic rakhi hai */}
      <div className="relative max-w-355 mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row lg:items-center justify-between min-h-[90vh] sm:min-h-200 lg:h-212.5 pt-10 lg:pt-0 pb-20 lg:pb-0">
        {/* ======================================================== */}
        {/* LEFT SIDE CONTENT (Stats & Text - Hidden on Mobile) */}
        {/* ======================================================== */}
        <div className="hidden lg:block mt-10 sm:mt-16 lg:mt-20 flex-col gap-12 sm:gap-16 lg:gap-20 z-40 relative order-1 lg:order-0 w-full lg:w-auto">
        </div>

        {/* ======================================================== */}
        {/* DESIGN CENTER-PIECE: TEXT AND IMAGE SANDWICH */}
        {/* ======================================================== */}

        {/* LAYER 1: SOLID TEXT BEHIND THE IMAGE */}
        <div className="absolute inset-x-0 bottom-10 sm:bottom-28 lg:bottom-10 z-10 flex flex-col items-center justify-end h-[50%] lg:h-full pointer-events-none select-none px-2 sm:px-4">
          <h1 className="font-['Anton'] text-[#FD683E] text-[25vw] lg:text-[15.5vw] xl:text-[300px] leading-[0.8] uppercase tracking-normal md:tracking-tighter text-center w-full">
            CREATIVE
          </h1>
          <h1 className="font-['Anton'] text-[#FD683E] text-[25vw] lg:text-[15.5vw] xl:text-[300px] leading-[1.2] uppercase tracking-normal md:tracking-tighter text-center w-full">
            AGENCY
          </h1>
        </div>

        {/* LAYER 2: THE IMAGE (PLACED PRECISELY IN THE MIDDLE) */}
        <div className="absolute left-1/2 lg:left-[46%] -translate-x-1/2 bottom-0 sm:bottom-16 lg:bottom-0 z-20 pointer-events-none w-full max-w-[450px] sm:max-w-[600px] lg:max-w-[1000px] flex items-end justify-center px-4 select-none">
          <img
            src="/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-800x800.png.png"
            alt="Creative Agency Hero"
            className="w-[90%] sm:w-[85%] h-auto max-h-105 sm:max-h-[550px] lg:max-h-[760px] object-contain object-bottom"
            draggable={false}
          />
        </div>

        {/* LAYER 3: OUTLINE TEXT IN FRONT OF IMAGE */}
        <div className="absolute inset-x-0 bottom-10 sm:bottom-28 lg:bottom-10 z-30 flex flex-col items-center justify-end h-[50%] lg:h-full pointer-events-none select-none px-2 sm:px-4">
          <h1
            className="font-['Anton'] text-transparent text-[25vw] lg:text-[15.5vw] xl:text-[300px] leading-[0.8] uppercase tracking-normal md:tracking-tighter text-center w-full"
            style={{ WebkitTextStroke: '1px #FD683E' }}
          >
            CREATIVE
          </h1>
          <h1
            className="font-['Anton'] text-transparent text-[25vw] lg:text-[15.5vw] xl:text-[300px] leading-[1.2] uppercase tracking-normal md:tracking-tighter text-center w-full"
            style={{ WebkitTextStroke: '2px #FD683E' }}
          >
            AGENCY
          </h1>
        </div>

        {/* ======================================================== */}
        {/* RIGHT SIDE CONTENT (Clean Flexbox - Responsive on Mobile) */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4 sm:gap-6 z-40 w-full lg:w-auto px-4 lg:px-0">

          {/* Larger Star Icon Section - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block ml-36 mb-11 self-start">
            <div className="w-24 h-24 xl:w-28 xl:h-58 flex items-end justify-end relative">
              <img
                src="/icons/SVG (2).png"
                alt="Star"
                className="w-12 h-12 xl:w-54 xl:h-54 object-contain animate-spin"
                style={{ animationDuration: '3s' }}
              />
            </div>
          </div>

          {/* Paragraph Description */}
          <p className="font-['Inter_Variable'] text-[13px] sm:text-[14px] mt-0 lg:mt-40 xl:text-[15px] leading-relaxed text-black font-light tracking-wide ml-0 lg:ml-4 max-w-[280px] sm:max-w-[400px] lg:max-w-[200px]">
            Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>

          {/* Buttons Row (CTA & Play Button) */}
          <div className="flex flex-row items-center gap-6 mt-2 lg:mt-4 ml-0 lg:ml-4">
            {/* Get Started Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 font-['Anton'] text-[13px] sm:text-[14px] text-black bg-transparent border-2 border-[#FD683E] px-5 sm:px-6 py-2.5 sm:py-3 uppercase tracking-wider hover:bg-[#FD683E] hover:text-[#1A1A2E] transition-all duration-300"
            >
              Get Started
              <div className="w-4 sm:w-5 h-5 rounded-full flex items-center justify-center">
                <img src="/icons/Vector (1).png" alt="Arrow" />
              </div>
            </Link>

            {/* Play Button */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 flex items-center justify-center">
              {/* WAVE RIPPLE EFFECTS */}
              <div className="absolute inset-0 bg-[#FFB343] rounded-full opacity-40 animate-ping pointer-events-none" style={{ animationDuration: '2s' }}></div>
              <div className="absolute inset-0 bg-[#FFB343] rounded-full opacity-25 animate-ping pointer-events-none" style={{ animationDuration: '2s', animationDelay: '0.8s' }}></div>

              <button className="relative z-10 w-full h-full flex items-center justify-center bg-[#3C222D] rounded-full shadow-lg transition-transform duration-300 hover:scale-110 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-[#E8F365] translate-x-[2px] group-hover:scale-105 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* PLAY BUTTON (Iska coordinates responsive design ke hisab se shift hote hain) */}
        {/* <div className="absolute left-1/2 lg:left-[54%] -translate-x-1/2 bottom-[24%] sm:bottom-[28%] lg:bottom-[42%] z-40">
          <button className="group relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center pointer-events-auto">
            <img
              src="/icons/Link - video-popup.png"
              alt="Play Video"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        </div> */}

      </div>

      {/* TICKER/MARQUEE FOOTER */}
      {/* <div className="absolute -bottom-12.5 left-0 right-0 z-50">
        <div
          className="bg-[#FFB343] py-2 sm:py-10 flex items-center whitespace-nowrap"
          style={{
            transform: 'rotate(-2deg) translateY(18px)',
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
      </div> */}
    </section>
  )
}