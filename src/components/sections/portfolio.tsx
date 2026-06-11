import { Link } from 'react-router-dom'

export function Portfolio() {
    // Saare cards ka aspect ratio aur sizes ab exact IDENTICAL (barabar) hain
    const projects = [
        {
            id: 1,
            category: "BRANDING & IDENTITY DESIGN",
            title: "STELLAR VISION - BRANDING & IDENTITY",
            imgSrc: "/icons/cosmetic-branding-mockup-AHXNTAL-800x533.jpg.png",
            className: "w-full md:w-[48%]" // Left Side - Normal Position
        },
        {
            id: 2,
            category: "WEB DESIGN",
            title: "HORZION HUB - WEBSITE DESIGN",
            imgSrc: "/icons/macbook-mockup-8Z2Q6TT-800x533.jpg.png",
            className: "w-full md:w-[48%] md:-translate-y-16 lg:-translate-y-24" // Right Side - Exact same width, but vertically shifted UPER!
        },
        {
            id: 3,
            category: "MOTION GRAPHICS",
            title: "VELOCITY - MOTION GRAPHICS & VIDEO",
            imgSrc: "/icons/neon-sign-board-WAG93JB-800x533.jpg.png",
            className: "w-full md:w-[48%] md:-mt-8 lg:-mt-12" // Left Side - Thoda open gap balance karne ke liye
        },
        {
            id: 4,
            category: "SOCIAL MEDIA",
            title: "BLOOM & BLISS - SOCIAL MEDIA CAMPAIGN",
            imgSrc: "/icons/social-media-mockups-K6H3BFT-800x533.jpg.png",
            className: "w-full md:w-[48%] md:-translate-y-16 lg:-translate-y-24" // Right Side - Phir se exact same vertical shift uper!
        },
        {
            id: 5,
            category: "PACKAGING DESIGN",
            title: "LUXE HAVEN - PACKAGING DESIGN",
            imgSrc: "/icons/packaging-mockup-8GHVPGT-800x533.jpg.png",
            className: "w-full md:w-[48%] md:-translate-y-16 lg:-translate-y-24" // Right Side - Phir se exact same vertical shift uper!
        }
    ];

    return (
        <section className="w-full pb-10 pt-35 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
            style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
        >
            <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 md:mb-20">
                <div className="max-w-[850px] text-left">
                    <h2 className="font-['Anton'] font-normal text-[40px] sm:text-[52px] md:text-[75px] leading-[1.1] text-[#3C222D] uppercase tracking-wide">

                        {/* Star Icon and Tag injected inline to stay inside the first line */}
                        <span className="inline-flex items-center gap-2 mr-4 md:mr-6">
                            <span
                                className="inline-block text-[#FF5533] text-[35px] sm:text-[40px] md:text-[50px] animate-spin shrink-0 select-none leading-none"
                                style={{ animationDuration: '3s' }}
                            >
                                ✦
                            </span>
                            <span className="font-['Anton'] text-[18px] sm:text-[22px] md:text-[28px] uppercase text-[#FF5533] tracking-wider leading-none">
                                PORTFOLIO
                            </span>
                        </span>

                        {/* Main Title Continues smoothly right after */}
                        TRANSFORMING IDEAS INTO MEMORABLE BRAND EXPERIENCES.
                    </h2>
                </div>

                <div className="flex flex-col gap-6 md:max-w-[420px] text-left pt-2">
                    <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Congue optent placerat neque senectus omet cras efficitur. Aptent malesuada.
                    </p>
                    <Link
                        to="/contact"
                        className="w-2/5 inline-flex items-center justify-center font-['Anton'] font-normal text-[14px] sm:text-[15px] text-[#3C222D] bg-transparent border-2 border-[#FF5533] px-6 py-2.5 uppercase tracking-widest hover:bg-[#FF5533] hover:text-white transition-all duration-300 gap-3"
                    >
                        CONTACT US

                        {/* Icon wrapper bina kisi extra bg-circle ke (just direct clean alignment) */}
                        <div className="w-[14px] h-[14px] flex items-center justify-center">
                            <img
                                src="/icons/SVG (1).png"
                                alt="arrow"
                                className="w-full h-full object-contain mix-blend-multiply"
                            />
                        </div>
                    </Link>
                </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* PORTFOLIO GRID: 50/50 Equal Width Flexbox Split Layout */}
            {/* -------------------------------------------------------- */}
            <div className="w-full flex flex-col md:flex-row flex-wrap justify-between">

                {/* .slice(0, 4) lagane se sirf pehle 4 projects hi loop honge */}
                {projects.slice(0, 4).map((project) => (
                    <div
                        key={project.id}
                        className={`${project.className || ''} flex flex-col group cursor-pointer mb-8 md:mb-16`}
                    >
                        {/* Aspect ratio identical block wrapper */}
                        <div className="w-full aspect-4/3 sm:aspect-3/4 md:aspect-4/5 lg:aspect-[1.1/1] overflow-hidden bg-white shadow-sm mb-5">
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                        <span className="font-['Inter_Variable'] text-[11px] sm:text-[16px] uppercase tracking-[0.18em] text-[#777777] font-semibold mb-1">
                            {project.category}
                        </span>
                        <h3 className="font-['Anton'] font-normal text-[18px] sm:text-[32px] text-[#3C222D] uppercase tracking-wide transition-colors group-hover:text-[#FF5533]">
                            {project.title}
                        </h3>
                    </div>
                ))}

                {/* -------------------------------------------------------- */}
                {/* BOTTOM CALL TO ACTION CTA CARD WIDGET                    */}
                {/* -------------------------------------------------------- */}

                {/* LEFT CARD: Isko inline-flex items-start structure mein rakha hai without gap-60 */}
                {/* min-h ko responsive karke chota kar diya aur padding tight kardi taaki box squeeze ho sake */}
                <div className="w-full md:w-[45%] order-6 md:order-0 bg-[#3C222D] p-5 sm:p-8 md:p-10 flex flex-col justify-start min-h-[220px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[380px] mb-8 md:mb-16">

                    {/* TOP ROW: Content Wrapper */}
                    <div className="w-full text-left mb-8"> {/* mb-8 lagaya taaki niche wali row se constant distance rahe */}
                        {/* Heading: Line-height tighter aur tracking clean */}
                        <h3 className="font-['Anton'] font-normal text-[26px] sm:text-[38px] lg:text-[44px] text-white leading-[1.05] uppercase tracking-wide mb-3">
                            OUR WORK <br />
                            <span>SPEAKS FOR ITSELF</span>
                        </h3>

                        {/* Paragraph: Clear and compact layout mapping */}
                        <p className="font-['Inter_Variable'] text-[13px] sm:text-[14px] text-white/50 normal-case tracking-normal font-light leading-relaxed max-w-[260px]">
                            From startups to global brands, we've always created impactful designs that tell stories.
                        </p>
                    </div>

                    {/* BOTTOM ROW: Spacing tighter ki hai aur flex constraints apply kiye hain */}
                    <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-white/10 mt-auto">

                        {/* Left Side: Call Icon & Number */}
                        <div className="flex items-center gap-3">
                            {/* Lime Circle Icon Button */}
                            <div className="w-11 h-11 bg-[#D4FF00] rounded-full flex items-center justify-center shrink-0 text-[#3C222D]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.954l-1.293.97a15.218 15.218 0 0 0 5.462 5.462l.97-1.293a1.875 1.875 0 0 1 1.954-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-['Inter_Variable'] text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">PHONE NUMBER</span>
                                <a href="tel:+4387956739876" className="font-['Anton'] text-[16px] sm:text-[18px] text-white tracking-wider hover:text-[#D4FF00] transition-colors">
                                    +43 879 5673 9876
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Exact Lime Border Button Layout */}
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center gap-4 font-['Anton'] text-[13px] text-white border-2 border-[#D4FF00] bg-transparent px-5 py-2.5 uppercase tracking-wider hover:bg-[#D4FF00] hover:text-[#3C222D] transition-all duration-300 group"
                        >
                            VIEW ALL PORTFOLIO
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#3C222D] shrink-0 group-hover:bg-[#3C222D] group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-2.5 h-2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </Link>

                    </div>
                </div>

                {/* RIGHT CARD: Isko md:w-[48%] ya [50%] kiya hai taaki size bada ho jaye */}
                {projects[4] && (
                    <div className={`${projects[4].className || ''} w-full md:w-[48%] order-5 md:order-0 flex flex-col group cursor-pointer mb-8 md:mb-16`}>
                        {/* Aspect ratio identical block wrapper */}
                        <div className="w-full aspect-4/3 sm:aspect-3/4 md:aspect-4/5 lg:aspect-[1.1/1] overflow-hidden bg-white shadow-sm mb-5">
                            <img
                                src={projects[4].imgSrc}
                                alt={projects[4].title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </div>

                        <span className="font-['Inter_Variable'] text-[11px] sm:text-[16px] uppercase tracking-[0.18em] text-[#777777] font-semibold mb-1">
                            {projects[4].category}
                        </span>

                        <h3 className="font-['Anton'] font-normal text-[18px] sm:text-[32px] text-[#3C222D] uppercase tracking-wide transition-colors group-hover:text-[#FF5533]">
                            {projects[4].title}
                        </h3>
                    </div>
                )}

            </div>

        </section>
    );
}