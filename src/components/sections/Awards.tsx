export default function AwardsSection() {
  // Awards data array loop logic control ke liye
  const awards = [
    {
      id: 1,
      tag: "DESIGN EXCELLENCE AWARDS",
      title: "2023 CREATIVE AGENCY OF THE YEAR",
      link: "#discover-more"
    },
    {
      id: 2,
      tag: "MARKETING INNOVATORS GUILD",
      title: "BEST DIGITAL CAMPAIGN 2022",
      link: "#discover-more"
    },
    {
      id: 3,
      tag: "GLOBAL DESIGN FORUM",
      title: "TOP BRANDING AGENCY 2021",
      link: "#discover-more"
    },
    {
      id: 4,
      tag: "CREATIVE LEADERS SUMMIT",
      title: "AWARD FOR OUTSTANDING INNOVATION",
      link: "#discover-more"
    }
  ];

  return (
    <section className="w-full bg-[#3C222D] px-6 py-16 sm:px-10 md:px-16 lg:px-24 text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* ========================================================= */}
        {/* TOP ROW BLOCK: Main Heading & Paragraph Grid Description */}
        {/* ========================================================= */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
          
          {/* Left Title: Integrated Star Logo tag and core branding message */}
          <div className="flex items-start gap-4 max-w-[800px]">
            {/* Custom SVG Four-point Star exactly matching image layout branding */}
            <div className="pt-2 shrink-0 text-white animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
              </svg>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="font-['Inter_Variable'] text-[11px] sm:text-[13px] tracking-[0.2em] text-white/50 font-bold uppercase">
                SYNTEXT AWARDS
              </span>
              <h2 className="font-['Anton'] font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] uppercase tracking-wide">
                CELEBRATING <span className="text-[#FF5533]">EXCELLENCE</span> <br />
                IN CREATIVITY.
              </h2>
            </div>
          </div>

          {/* Right Text Description Block */}
          <div className="max-w-[360px] md:pt-8 text-left shrink-0">
            <p className="font-['Inter_Variable'] text-[13px] sm:text-[14px] text-white/50 leading-relaxed font-light normal-case">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit leo at leo feugiat, in ultrices nunc sollicitudin. Nunc sit amet ligula a sapien porttitor commodo ac sed lorem cras nec velit vitae.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW BLOCK: Interactive Sequential Award Rows       */}
        {/* ========================================================= */}
        <div className="w-full flex flex-col mt-4">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-white/10 group hover:bg-white/[0.02] transition-colors duration-300 px-2 first:border-t"
            >
              {/* Left Data Content */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="font-['Inter_Variable'] text-[11px] sm:text-[12px] tracking-[0.15em] text-[#D4FF00] font-semibold uppercase">
                  {award.tag}
                </span>
                <h3 className="font-['Anton'] font-normal text-[22px] sm:text-[26px] md:text-[32px] tracking-wide text-white uppercase group-hover:text-[#FF5533] transition-colors duration-300">
                  {award.title}
                </h3>
              </div>

              {/* Right Action Trigger Box: Hollow Custom Styled Button */}
              <div className="shrink-0 text-left md:text-right">
                <a
                  href={award.link}
                  className="inline-flex items-center justify-center font-['Anton'] font-normal text-[12px] text-white bg-transparent border border-[#D4FF00] px-6 py-2.5 uppercase tracking-widest hover:bg-[#D4FF00] hover:text-[#3C222D] transition-all duration-300 min-w-[150px]"
                >
                  DISCOVER MORE
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}