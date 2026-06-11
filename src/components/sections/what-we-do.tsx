import { Link } from 'react-router-dom'

export function WhatWeDo() {
  return (
    <section className="-z-5 w-full bg-[#3C222D] text-white pt-15 pb-5 md:pt-30 md:pb-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-355 mx-auto flex flex-col gap-12 md:gap-16">

        {/* ======================================================== */}
        {/* TOP HEADER SECTION */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          {/* Tagline & Main Heading */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-24">
            {/* What We Do Tagline */}
            <div className="flex gap-2 items-center shrink-0">
              <img
                src="/icons/2-PNG.png (4).png"
                alt="Star Icon"
                className="w-8 h-8 object-contain animate-spin"
                style={{ animationDuration: '6s' }}
              />
              <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-white uppercase">
                What We Do
              </span>
            </div>

            {/* Main Interactive Title */}
            <h2 className="font-['Anton'] font-normal text-[30px] sm:text-[50px] md:text-[65px] lg:text-[75px] leading-[1.05] uppercase tracking-wide">
              Designing for Seamless and <br className="hidden sm:inline" /> Enjoyable Interactions.
            </h2>
          </div>

          {/* Action Button */}
          <div className="self-start lg:self-end mb-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 font-['Anton'] font-normal text-[16px] text-white bg-transparent border-2 border-[#EAF261] px-6 py-3 uppercase tracking-wider hover:bg-[#EBF264] hover:text-[#1A1A2E] transition-all duration-300"
            >
              All Services
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#1A1A1A" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>

        </div>

        {/* ======================================================== */}
        {/* SERVICES CARDS GRID SECTION */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* --- CARD 1 (Dark Background) --- */}
          <div className="bg-[#262626] p-6 sm:p-8  flex flex-col px-7 justify-between min-h-120 group hover:bg-[#2e2e2e] transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-['Anton'] font-normal text-[24px] sm:text-[28px] leading-tight uppercase tracking-wide max-w-[200px]">
                  Brand Building & Strategy.
                </h3>
                <button className="w-12 h-12 rounded-full bg-[#EBF264] flex items-center justify-center text-[#1A1A2E] transform group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
              <p className="font-['Inter_Variable'] text-[14px] text-white/70 leading-relaxed w-full max-w-xs font-light">
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
              </p>
            </div>
            <div className="mt-6 overflow-hidden">
              <img
                src="/working-job-career-casual-showing-SJZWF3N-800x533.jpg.png"
                alt="Brand Strategy"
                className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* --- CARD 2 (Highlighted Blue Background) --- */}
          <div className="bg-[#EBF264] p-6 sm:p-8 flex flex-col justify-between min-h-[480px] shadow-xl">
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden">
                <img
                  src="/working-job-career-casual-showing-8GNF7UD-800x533.jpg.png"
                  alt="Creative Digital Solution"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-['Anton'] font-normal text-[24px] text-black sm:text-[28px] leading-tight uppercase tracking-wide max-w-[220px]">
                  Creative Digital Solution.
                </h3>
                <button className="w-12 h-12 rounded-full bg-[#FD683E] flex items-center justify-center text-[#1A1A2E] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="font-['Inter_Variable'] text-[14px] text-black leading-relaxed w-full max-w-xs font-light mt-4">
              Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>
          </div>

          {/* --- CARD 3 (Dark Background) --- */}
          <div className="bg-[#262626] p-6 sm:p-8 flex flex-col justify-between min-h-[480px] group hover:bg-[#2e2e2e] transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-['Anton'] font-normal text-[24px] sm:text-[28px] leading-tight uppercase tracking-wide max-w-[200px]">
                  Marketing & Campaign.
                </h3>
                <button className="w-12 h-12 rounded-full bg-[#EBF264] flex items-center justify-center text-[#1A1A2E] transform group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
              <p className="font-['Inter_Variable'] text-[14px] text-white/70 leading-relaxed w-full max-w-xs font-light">
                Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
              </p>
            </div>
            <div className="mt-6 overflow-hidden">
              <img
                src="/group-of-creative-people-working-and-brainstorming-F9J86RY-800x533.jpg.png"
                alt="Marketing Campaign"
                className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}