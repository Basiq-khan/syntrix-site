import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function AwardsSection() {
  // Services data array loop logic control ke liye
  const awards = [
    {
      id: 1,
      tag: "BRANDING & IDENTITY",
      title: "BRAND STRATEGY & VISUAL IDENTITY",
      link: "/services/branding-and-identity"
    },
    {
      id: 2,
      tag: "WEB DESIGN & DEVELOPMENT",
      title: "CUSTOM WEBSITES THAT CONVERT",
      link: "/services/web-design-development"
    },
    {
      id: 3,
      tag: "DIGITAL MARKETING",
      title: "DIGITAL MARKETING STRATEGY",
      link: "/services/digital-marketing-strategy"
    },
    {
      id: 4,
      tag: "UI/UX DESIGN",
      title: "UI/UX DESIGN SOLUTIONS",
      link: "/services/ui-ux-design-solution"
    },
    {
      id: 5,
      tag: "CONTENT CREATION",
      title: "CONTENT CREATION SOLUTIONS",
      link: "/services/content-creation-solution"
    },
    {
      id: 6,
      tag: "MOBILE APPS",
      title: "MOBILE APP DEVELOPMENT",
      link: "/services/mobile-app-development"
    },
    {
      id: 7,
      tag: "NEW SERVICE",
      title: "YOUTUBE AUTOMATION",
      link: "/services/youtube-automation"
    }
  ];

  return (
    <section className="w-full bg-[#000219] px-6 py-10 sm:px-10 md:px-16 lg:px-24 text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">

        {/* ========================================================= */}
        {/* TOP ROW BLOCK: Main Heading & Paragraph Grid Description */}
        {/* ========================================================= */}
        <div className="flex md:flex-row flex-col items-start gap-5 justify-between">
          <div className="flex gap-2 items-center">
            {/* Custom SVG Four-point Star exactly matching image layout branding */}
            <div className="pt-2 shrink-0 text-white animate-pulse">
              <Star className="w-8 h-8 fill-white" />
            </div>
            <span className="font-['Anton'] text-xl uppercase text-nowrap">
              SYNTRIX SERVICES
            </span>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
              {/* Left Title: Integrated Star Logo tag and core branding message */}
              <div className="flex items-start gap-4 max-w-[800px]">
                <div className="flex flex-col gap-1">
                  <h2 className="font-['Anton'] font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.05] uppercase tracking-wide">
                    SERVICES <span className="text-[#FF5533]">WE OFFER</span> <br />
                    TO OUR CLIENTS.
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
                  className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-b border-white/10 group hover:bg-white/2 transition-colors duration-300 px-2 first:border-t"
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
                    <Link
                      to={award.link}
                      className="inline-flex items-center justify-center font-['Anton'] font-normal text-[12px] text-white bg-transparent border border-[#D4FF00] px-6 py-2.5 uppercase tracking-widest hover:bg-[#D4FF00] hover:text-[#3C222D] transition-all duration-300 min-w-[150px]"
                    >
                      DISCOVER MORE
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}