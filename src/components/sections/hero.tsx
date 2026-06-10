export function Hero() {
  return (
    <section className="z-50 relative w-full overflow-hidden pt-17.5 md:pt-12 text-black"
    style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      {/* Container height screen size ke hisab se dynamic rakhi hai */}
      <div className="relative max-w-355 mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row lg:items-center justify-between min-h-175 sm:min-h-200 lg:h-212.5 pt-10 lg:pt-0 pb-20 lg:pb-0">

        {/* ======================================================== */}
        {/* LEFT SIDE CONTENT (Stats & Text) */}
        {/* ======================================================== */}
        <div className="mt-10 sm:mt-16 lg:mt-20 flex flex-col gap-12 sm:gap-16 lg:gap-20 z-40 relative order-1 lg:order-0 w-full lg:w-auto">
          {/* Team Info */}
          <div className="flex flex-col gap-4">
            <div className="flex -space-x-2">
              <img src="/icons/pleased-to-meet-you-smart-attractive-redhead-man-w-G6AMV2J.jpg (1).png" alt="" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
              <img src="/icons/horizontal-shot-of-good-looking-funny-and-happy-ma-X5RMJTP.jpg (1).png" alt="" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
              <img src="/icons/waist-up-shot-of-charming-female-freelance-journal-9QUQDSC.jpg (1).png" alt="" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
            </div>
            <div className="bg-[#FD683E] p-[2px] w-[140px] sm:w-[170px]"></div>
            <h2 className="text-[14px] sm:text-[16px] font-normal w-full sm:w-[170px] font-['Anton'] text-black leading-5">
              THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.
            </h2>
          </div>

          {/* Counters - Mobile par row me aur Desktop par column me dikhenge */}
          <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-4 sm:gap-6 lg:gap-10 bg-black/10 lg:bg-transparent p-4 sm:p-6 lg:p-0 rounded-2xl backdrop-blur-sm lg:backdrop-blur-none">
            <div className="flex flex-col items-start gap-1">
              <span className="font-['Anton'] text-[28px] sm:text-[40px] lg:text-[48px] leading-none text-black">500+</span>
              <span className="font-['Inter_Variable'] text-[11px] sm:text-[13px] lg:text-[14px] text-black/70 tracking-wide">Happy Client</span>
              <div className="bg-[#FD683E] w-12 sm:w-20 lg:w-[100px] h-[3px] sm:h-[4px]"></div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-['Anton'] text-[28px] sm:text-[40px] lg:text-[48px] leading-none text-black">125+</span>
              <span className="font-['Inter_Variable'] text-[11px] sm:text-[13px] lg:text-[14px] text-black/70 tracking-wide">Project Done</span>
              <div className="bg-[#FD683E] w-12 sm:w-20 lg:w-[100px] h-[3px] sm:h-[4px]"></div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-['Anton'] text-[28px] sm:text-[40px] lg:text-[48px] leading-none text-black">450+</span>
              <span className="font-['Inter_Variable'] text-[11px] sm:text-[13px] lg:text-[14px] text-black/70 tracking-wide">Media Featured</span>
              <div className="bg-[#FD683E] w-12 sm:w-20 lg:w-[100px] h-[3px] sm:h-[4px]"></div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESIGN CENTER-PIECE: TEXT AND IMAGE SANDWICH */}
        {/* ======================================================== */}

        {/* LAYER 1: SOLID TEXT BEHIND THE IMAGE */}
        <div className="absolute inset-x-0 bottom-24 sm:bottom-28 lg:bottom-10 z-10 flex flex-col items-center justify-end h-[50%] lg:h-full pointer-events-none select-none px-2 sm:px-4">
          <h1 className="font-['Anton'] text-[#FD683E] text-[16vw] lg:text-[15.5vw] xl:text-[300px] leading-[0.8] uppercase tracking-tighter text-center w-full">
            CREATIVE
          </h1>
          <h1 className="font-['Anton'] text-[#FD683E] text-[16vw] lg:text-[15.5vw] xl:text-[300px] leading-[1.2] uppercase tracking-tighter text-center w-full">
            AGENCY
          </h1>
        </div>

        {/* LAYER 2: THE IMAGE (PLACED PRECISELY IN THE MIDDLE) */}
        <div className="absolute left-1/2 lg:left-[46%] -translate-x-1/2 bottom-12 sm:bottom-16 lg:bottom-0 z-20 pointer-events-none w-full max-w-[450px] sm:max-w-[600px] lg:max-w-[1000px] flex items-end justify-center px-4">
          <img
            src="/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207-800x800.png.png"
            alt="Creative Agency Hero"
            className="w-[90%] sm:w-[85%] h-auto max-h-105 sm:max-h-[550px] lg:max-h-[760px] object-contain object-bottom"
            draggable={false}
          />
        </div>

        {/* LAYER 3: OUTLINE TEXT IN FRONT OF IMAGE */}
        <div className="absolute inset-x-0 bottom-24 sm:bottom-28 lg:bottom-10 z-30 flex flex-col items-center justify-end h-[50%] lg:h-full pointer-events-none select-none px-2 sm:px-4">
          <h1
            className="font-['Anton'] text-transparent text-[16vw] lg:text-[15.5vw] xl:text-[300px] leading-[0.8] uppercase tracking-tighter text-center w-full"
            style={{ WebkitTextStroke: '1px #FD683E' }}
          >
            CREATIVE
          </h1>
          <h1
            className="font-['Anton'] text-transparent text-[16vw] lg:text-[15.5vw] xl:text-[300px] leading-[1.2] uppercase tracking-tighter text-center w-full"
            style={{ WebkitTextStroke: '2px #FD683E' }}
          >
            AGENCY
          </h1>
        </div>

        {/* ======================================================== */}
        {/* RIGHT SIDE CONTENT (Clean Flexbox - Hidden on Mobile) */}
        {/* ======================================================== */}
        <div className="hidden lg:flex flex-col gap-6 text-left z-40">

          {/* Larger Star Icon Section */}
          <div className="ml-36 mb-11 self-start">
            <div className="w-24 h-24 xl:w-28 xl:h-58 flex items-end justify-end relative">
              <img
                src="/icons/SVG (2).png"
                alt="Star"
                className="w-12 h-12 xl:w-54 xl:h-54 object-contain animate-spin"
                style={{ animationDuration: '3s' }} /* Speed adjust karne ke liye (8s matlab aaram se ghumega, 3s matlab tez ghumega) */
              />
            </div>
          </div>

          {/* Paragraph Description */}
          <p className="font-['Inter_Variable'] text-[14px] mt-40 xl:text-[15px] leading-relaxed text-black font-light tracking-wide  ml-4 max-w-[200px]">
            Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>

          {/* Sharp Rectangular Button */}
          <div className="flex items-center gap-4 mt-2 ml-4 ">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 font-['Anton'] text-[14px] text-black bg-transparent border-2 border-[#FD683E] px-6 py-3 uppercase tracking-wider hover:bg-[#FD683E] hover:text-[#1A1A2E] transition-all duration-300"
            >
              Get Started
              <div className="w-5 h-5 rounded-full flex items-center justify-center">
                <img src="/icons/Vector (1).png" alt="Arrow" />
              </div>
            </a>
          </div>

          {/* Play Button */}
         <div className="mt-4 ml-4">
  {/* Main Outer Wrapper: Isko core positioning context dene ke liye relative rakha hai */}
  <div className="relative w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center">
    
    {/* ======================================================== */}
    {/* WAVE RIPPLE EFFECTS (PEECHE WALI LAYERS) */}
    {/* ======================================================== */}
    {/* Pehli Core Outer Wave Loop Layer */}
    <div className="absolute inset-0 bg-[#FFB343] rounded-full opacity-40 animate-ping pointer-events-none" style={{ animationDuration: '2s' }}></div>
    
    {/* Dusri Delayed Intertwined Wave Layer (For double wave depth) */}
    <div className="absolute inset-0 bg-[#FFB343] rounded-full opacity-25 animate-ping pointer-events-none" style={{ animationDuration: '2s', animationDelay: '0.8s' }}></div>

    {/* ======================================================== */}
    {/* ACTUAL INTERACTIVE PLAY BUTTON (FRONT LAYER) */}
    {/* ======================================================== */}
    <button className="relative z-10 w-full h-full flex items-center justify-center bg-[#3C222D] rounded-full shadow-lg transition-transform duration-300 hover:scale-110 group">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-7 h-7 xl:w-8 xl:h-8 text-[#E8F365] translate-x-[2px] group-hover:scale-105 transition-transform"
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