export function TypographySection() {
  return (
    <section className="w-full bg-[#000219] py-16 sm:py-24 md:py-10 px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center overflow-hidden">

      {/* -------------------------------------------------------- */}
      {/* MAIN TEXT WRAPPER GRID BLOCK */}
      {/* -------------------------------------------------------- */}
      <div className="w-full max-w-[1320px] text-center text-white font-['Anton'] font-normal text-[32px] sm:text-[44px] md:text-[60px] leading-[1.2] md:leading-tight uppercase tracking-wide select-none">

        {/* Row 1 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-2">
          {/* Blue Filled Badge Container */}
          <span className="inline-block bg-[#EAF261] text-transparent border-2 border-transparent px-5 py-1 rounded-full text-[24px] sm:text-[34px] md:text-[46px] transform -rotate-3 hover:rotate-0 hover:transition hover:duration-300 shadow-md"
            style={{ WebkitTextStroke: '1.5px rgba(0, 0, 0, 1)' }}
          >
            "WE ARE CREATORS,
          </span>
          <span className="text-white">INNOVATORS, AND,</span>
          <span className="text-white">STORYTELLERS</span>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-2">
          <span className="text-white">COMMITTED TO UNDERSTANDING</span>
          {/* Small Cutout Pill Image 1 */}
          <div className="inline-block w-[90px] sm:w-[120px] md:w-[150px] h-[35px] sm:h-[48px] md:h-[62px] rounded-full overflow-hidden border border-white/20 align-middle transform rotate-1">
            <img
              src="/three-girls-from-different-ethnicities-posing-in-s-F4AT9XK.jpg.png" /* Public assets directory location */
              alt="Brand Identity"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <span className="text-white">EACH BRAND'S</span>
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-2">
          <span className="text-white">UNIQUE</span>
          {/* Small Cutout Pill Image 2 */}
          <div className="inline-block w-[110px] sm:w-[150px] md:w-[180px] h-[35px] sm:h-[48px] md:h-[62px] rounded-full overflow-hidden border border-white/20 align-middle transform -rotate-1">
            <img
              src="/woman-with-curly-hair-enjoying-a-smoothie-on-a-sun-88Z62G9-800x533.jpg.png" /* Public assets directory location */
              alt="Creative Vision"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span className="text-white">IDENTITY.</span>
          <span className="text-transparent"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>WE IMMERSE OURSEWS IN</span>
        </div>

        {/* Row 4 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-2">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
          >
            YOUR VISION,
          </span>
          <span className="text-white">BLENDING STRATEGY WITH</span>
          <span className="text-[#FD683E] transform rotate-3 hover:rotate-0 hover:transition hover:duration-300">CREATIVITY</span>
          <span className="text-white">TO</span>
        </div>

        {/* Row 5 */}
        <div className="flex items-center justify-center gap-x-3 gap-y-2 mb-2 flex-wrap">
          {/* Orange Bordered Badge Box */}
          <span
            className="inline-block text-transparent bg-[#DBF1FE] px-6 py-0.5 rounded-2xl tracking-normal"
            style={{ WebkitTextStroke: '1.5px #3C222D' }}
          >
            BUILT BRANDS
          </span>
          <span className="text-white">THAT DON'T JUST EXIST BUT </span>
        </div>

        {/* Row 6 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span className="text-white">THRIVE IN THE HEARTS OF THEIR</span>
          <span
            className="text-transparent transform -rotate-3 hover:rotate-0 hover:transition hover:duration-300"
            style={{ WebkitTextStroke: '1.5px #FFB343' }}
          >
            AUDIENCES."
          </span>
        </div>
      </div>

      {/* -------------------------------------------------------- */}
      {/* BRAND SUB-LABEL BRAND FOOTER BRAND */}
      {/* -------------------------------------------------------- */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {/* Glowing Green/Yellow Star Icon Accent */}
        <img src="icons/Star.png" alt="hkhj" />
        <span className="font-['anton'] text-[20px] sm:text-[12px] uppercase tracking-[0.25em] text-white">
          SYNTRIX CREATIVE AGENCY ®
        </span>
      </div>

    </section>
  );
}