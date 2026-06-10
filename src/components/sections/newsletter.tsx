export default function NewsletterBanner() {
  return (
    <section className="w-full px-4 py-36 sm:px-10 md:px-16 lg:px-24"
        style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Dark Container Box */}
        <div className="w-full bg-[#2A2A2A] rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center relative min-h-[320px] sm:min-h-[360px]">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Large Decorative Star / Circle Badge          */}
          {/* ========================================================= */}
          <div className="col-span-1 lg:col-span-4 h-full flex items-center justify-start relative overflow-hidden min-h-[200px] lg:min-h-auto">
            {/* Circular frame with thick lime border and star element */}
            <div className="absolute left-[-40px] lg:left-[-50px] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border-[3px] border-[#D4FF00] flex items-center justify-center bg-transparent">
              
              {/* Lime Green Cutout Star Graphic */}
              <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] text-[#D4FF00] relative left-4">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
                </svg>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Headings, Paragraph and Inline Form Group   */}
          {/* ========================================================= */}
          <div className="col-span-1 lg:col-span-8 flex flex-col text-left px-6 py-8 sm:p-12 lg:pl-0 lg:pr-16 z-10">
            
            {/* Main Title Heading */}
            <h2 className="font-['Anton'] font-normal text-[28px] sm:text-[36px] md:text-[42px] text-white uppercase tracking-wide leading-[1.1] max-w-[780px] mb-4">
              JOIN OUR NEWSLETTER & GET EXCLUSIVE INSIGHTS, TIPS, & UPDATES STRAIGHT TO YOUR INBOX
            </h2>

            {/* Small Description Context */}
            <p className="font-['Inter_Variable'] text-[16px] sm:text-[14px] text-white font-light tracking-wide mb-10">
              Join our newsletter and get exclusive insights, tips, and updates straight to your inbox.
            </p>

            {/* Subscription Form Input Area */}
            <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col sm:flex-row items-end sm:items-center relative">
              
              {/* Input Wrapper Field */}
              <div className="w-full relative flex flex-col items-start gap-1">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent text-white font-['Inter_Variable'] text-[14px] pb-3 pt-2 placeholder-white border-b border-[#FF5533] outline-none transition-colors duration-300 focus:border-[#D4FF00]"
                  required
                />
              </div>

              {/* Subscribe Action Button Embedded Inside Orange Frame Line */}
              <button 
                type="submit"
                className="w-full sm:w-auto shrink-0 bg-transparent text-white border border-[#FF5533] font-['Anton'] font-normal text-[14px] tracking-widest uppercase px-10 py-3 mt-6 sm:mt-0 sm:ml-[-1px] transition-all duration-300 hover:bg-[#FF5533] hover:text-black"
              >
                SUBSCRIBE NOW
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}