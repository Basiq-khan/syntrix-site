export function BrandsStrip() {
  return (
    <div className="mt-0 md:-mt-70 w-full max-w-[1420px] mx-auto py-6 px-4 md:px-0"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      {/* Yahan pure dynamic flex-wrap wrap kiya hai taaki desktop par row rahe, 
        aur mobile screens par logos dabne ke bajaye cleanly next line me switch ho jayein.
      */}
      <div className="w-full bg-[#262626] rounded-2xl py-6 px-6 sm:px-10 md:px-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 shadow-xl border border-white/5">

        {/* Logo 1 */}
        <img
          src="/1.png"
          alt="Partner Brand"
          className="h-9 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 2 */}
        <img
          src="/2.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 3 */}
        <img
          src="/9.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 4 */}
        <img
          src="/4.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 5 */}
        <img
          src="/5.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 6 */}
        <img
          src="/6.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 7 */}
        <img
          src="/7.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

        {/* Logo 8 */}
        <img
          src="/8.png"
          alt="Partner Brand"
          className="h-6 sm:h-7 md:h-auto w-30 object-contain shrink-0 hover:scale-105 transition-transform duration-200"
        />

      </div>
    </div>
  );
}