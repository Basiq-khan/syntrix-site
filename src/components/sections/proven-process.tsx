export default function Provenprocess() {
  const processes = [
    {
      num: "01",
      tag: "DISCOVER",
      title: "UNDERSTANDING YOUR VISION",
      // Orange Block Styles
      bgColor: "bg-[#FF5533]",
      textColor: "text-white",
      tagColor: "text-white",
      numColor: "text-white"
    },
    {
      num: "02",
      tag: "DESIGN",
      title: "CRAFTING UNIQUE CONCEPTS",
      // Dark Block Styles
      bgColor: "bg-[#3C222D]",
      textColor: "text-white",
      tagColor: "text-[#D4FF00]", // Lime tag text
      numColor: "text-white"
    },
    {
      num: "03",
      tag: "DEVELOP",
      title: "BRING DESIGNS TO LIFE",
      // Orange Block Styles
      bgColor: "bg-[#FF5533]",
      textColor: "text-white",
      tagColor: "text-white",
      numColor: "text-white"
    },
    {
      num: "04",
      tag: "DELIVER",
      title: "LAUNCH WITH EXCELLENCE",
      // Dark Block Styles
      bgColor: "bg-[#3C222D]",
      textColor: "text-white",
      tagColor: "text-[#D4FF00]", // Lime tag text
      numColor: "text-white"
    }
  ];

  return (
    <section className="w-full text-[#3C222D] px-6 py-10 sm:px-10 md:px-16 lg:px-24"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col">

        {/* ========================================================= */}
        {/* TOP ROW: Title block and Description Context              */}
        {/* ========================================================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-5">

          {/* Header left side with spinning star icon integration */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative shrink-0">
                <img
                  src="/icons/dark-star.png"
                  alt="Star"
                  className="w-8 h-8 object-contain animate-spin"
                  style={{ animationDuration: '4s' }}
                />
              </div>
              <span className="font-['anton'] text-[20px] uppercase text-[#3C222D]">
                OUR PROVEN PROCESS
              </span>
            </div>

            <h2 className="font-['Anton'] font-normal text-[44px] sm:text-[56px] md:text-[64px] leading-[1.05] uppercase tracking-wide">
              FROM VISION TO REALITY
            </h2>
          </div>

          {/* Header right side side paragraph info */}
          <div className="lg:col-span-6 text-left lg:pt-8">
            <p className="font-['Inter_Variable'] text-[13px] sm:text-[14px] text-[#3C222D]/80 leading-relaxed font-light max-w-[540px]">
              Placerat neque senectus amet cras efficitur. Aptent malesuada sit conubia tincidunt iaculis faucibus Arcu et aliquet ad amet cras efficitur sollicitudin maximus elementum hac lectus ex fusce.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW: Process Cards Grid Layout Layout              */}
        {/* ========================================================= */}
        {/* items-start lagaya taaki orange cards freely niche stretch ho sakein */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
          {processes.map((proc, index) => (
            <div
              key={index}
              className={`w-full ${proc.bgColor} ${proc.textColor} p-6 sm:p-8 flex flex-col justify-between aspect-square relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index === 0 || index === 2
                ? 'min-h-[290px] sm:min-h-[310px] lg:min-h-[410px] aspect-auto!'
                : 'min-h-[260px] sm:min-h-[280px] lg:min-h-[320px]'
                }`}
            >

              {/* Card Top Segment: Outlined Big Number & Category Tag */}
              <div className="w-full flex justify-between items-start">
                {/* Big Number stylized using Webkit outline for transparency feeling */}
                <span
                  className={`font-['Anton'] text-[56px] sm:text-[64px] leading-none select-none ${proc.numColor}`}
                  style={{
                    WebkitTextStroke: '1px currentColor',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {proc.num}
                </span>

                {/* Right Aligned Tiny Process Tag */}
                <span className={`font-['Anton'] tracking-wider text-[32px] sm:text-[32px] uppercase ${proc.tagColor} pt-2`}>
                  {proc.tag}
                </span>
              </div>

              {/* Card Bottom Segment: Core Descriptive Title Text */}
              <div className="w-full text-left mt-auto z-10">
                <h3 className="font-['Anton'] font-normal text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.1] uppercase tracking-wide max-w-[200px]">
                  {proc.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}