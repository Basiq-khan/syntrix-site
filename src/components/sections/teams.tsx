import { useState } from 'react';

export default function TeamSection() {
    // Managing active expanded state for the accordion effect
    // Defaulting to index 1 (Liam Johnson) to match initial image look exactly
    const [activeId, setActiveId] = useState(1);

    const teamMembers = [
        {
            id: 0,
            name: "Sarah Jenkins",
            role: "CREATIVE DESIGNER",
            imgSrc: "/3554ae6d590258fd985a8dbcd5a55e240c468b1b.jpg",
        },
        {
            id: 1,
            name: "LIAM JOHNSON",
            role: "ART DIRECTOR",
            imgSrc: "/84a63e8a4ed54f39cb8405d6acb7f60868dd4ea4.jpg",
        },
        {
            id: 2,
            name: "Emily Davis",
            role: "STRATEGIST",
            imgSrc: "/3544527461817d19c3bd5f8a981f9e720489c9a8.jpg",
        },
        {
            id: 3,
            name: "Marcus Vance",
            role: "TECH LEAD",
            imgSrc: "/b09ba91ecd7f84cd012c24e5447278afb50785d8.jpg",
        }
    ];

    return (
        <section className="w-full px-6 py-20 sm:px-10 md:px-16 lg:px-24 text-[#3C222D]"
            style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
        >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* ========================================================= */}
                {/* LEFT COLUMN: Texts, Metrics and Typography (5 Cols)      */}
                {/* ========================================================= */}
                <div className="w-full lg:col-span-5 flex flex-col text-left">

                    {/* Header Tagline with Star element */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="relative shrink-0"> {/* Wrapper fixed size ka taaki spin overlap na kare */}
                            <img
                                src="/icons/2-PNG.png (1).png"
                                alt="Spinning Star Icon"
                                className="w-7 h-7 object-contain animate-spin select-none"
                                style={{ animationDuration: '3s' }}
                            />
                        </div>
                        <span className="font-['anton'] text-[20px] uppercase text-[#3C222D]">
                            MEET THE EXPERT
                        </span>
                    </div>

                    {/* Core Title Section */}
                    <h2 className="font-['Anton'] font-normal text-[46px] sm:text-[56px] md:text-[64px] leading-[1.05] uppercase tracking-wide mb-6">
                        TEAM OF EXPERT
                    </h2>

                    {/* Context Paragraph Description */}
                    <p className="font-['Inter_Variable'] text-[14px] text-[#3C222D]/70 leading-relaxed font-light max-w-[440px] mb-12">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Congue aptent placerat neque senectus amet cras efficitur. Aptent malesuada sit conubia tincidunt iaculis faucibus Arcu et aliquet ad.
                    </p>

                    {/* Metric Stats Rows Grid layout */}
                    <div className="grid grid-cols-2 gap-8 max-w-[420px]">
                        {/* Stat Item 1 */}
                        <div className="flex flex-col text-left">
                            {/* Relative continuous frame logic alignment */}
                            <div className="flex items-center font-['Anton'] text-[48px] sm:text-[56px] leading-none tracking-wide text-[#3C222D] mb-2 relative">

                                {/* 1. BACKGROUND STAR IMAGE OVERLAY LAYER */}
                                <img
                                    src="/icons/2-PNG.png (1).png"
                                    alt="Star Watermark"
                                    className="absolute left-[-8px] top-[20%] translate-y-[-40%] w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-25 pointer-events-none select-none z-0 mix-blend-multiply"
                                />

                                {/* 2. TEXT ROW WRAPPER WITH HIGHER Z-INDEX */}
                                <span className="relative z-10 flex ml-8 mb-8 items-center">
                                    300
                                    <img
                                        src="/icons/+.png"
                                        alt="Star Icon"
                                        className="w-6 h-6 object-contain ml-2"
                                    />
                                </span>
                            </div>

                            <span className="font-['anton'] text-[15px] sm:text-[20px] uppercase text-[#3C222D]">
                                SUCCESSFUL PROJECT
                            </span>
                        </div>

                        {/* Stat Item 2 */}
                        <div className="flex flex-col text-left">
                            {/* Relative continuous frame logic alignment */}
                            <div className="flex items-center font-['Anton'] text-[48px] sm:text-[56px] leading-none tracking-wide text-[#3C222D] mb-2 relative">

                                {/* 1. BACKGROUND STAR IMAGE OVERLAY LAYER */}
                                <img
                                    src="/icons/2-PNG.png (1).png"
                                    alt="Star Watermark"
                                    className="absolute left-[-8px] top-[20%] translate-y-[-40%] w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-25 pointer-events-none select-none z-0 mix-blend-multiply"
                                />

                                {/* 2. TEXT ROW WRAPPER WITH HIGHER Z-INDEX */}
                                <span className="relative z-10 flex ml-8 mb-8 items-center">
                                    200
                                    <img
                                        src="/icons/+.png"
                                        alt="Star Icon"
                                        className="w-6 h-6 object-contain ml-2"
                                    />
                                </span>
                            </div>

                            <span className="font-['anton'] text-[15px] sm:text-[20px] uppercase text-[#3C222D]">
                                BRAND GROW GLOBALLY
                            </span>
                        </div>
                    </div>

                </div>

                {/* ========================================================= */}
                {/* RIGHT COLUMN: Interactive Dynamic Accordion Slider (7 Cols)*/}
                {/* ========================================================= */}
                <div className="w-full lg:col-span-7 flex h-[480px] sm:h-[540px] md:h-[580px] gap-2.5 sm:gap-4 overflow-hidden items-stretch">
                    {teamMembers.map((member) => {
                        const isExpanded = activeId === member.id;
                        return (
                            <div
                                key={member.id}
                                onMouseEnter={() => setActiveId(member.id)}
                                className={`relative h-full overflow-hidden cursor-pointer bg-neutral-300 transition-all duration-700 ease-out flex flex-col justify-end text-left rounded-sm
                  ${isExpanded ? 'flex-[3.5] sm:flex-[4.5]' : 'flex-[1] lg:flex-[1.1]'}
                `}
                            >
                                {/* Background Image Layer */}
                                <img
                                    src={member.imgSrc}
                                    alt={member.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out object-center
                    ${isExpanded ? 'scale-[1.02]' : 'scale-100 contrast-[0.95]'}
                  `}
                                />

                                {/* Dark Gradient Overlay for Typography readability */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-[#3C222D]/90 via-[#3C222D]/30 to-transparent transition-opacity duration-500
                  ${isExpanded ? 'opacity-100' : 'opacity-40'}
                `} />

                                {/* Text Data Layer with dynamic sliding animation wrapper */}
                                <div className="relative z-10 p-4 sm:p-6 w-full flex flex-col transform transition-all duration-500 overflow-hidden whitespace-nowrap">
                                    <h3 className={`font-['Anton'] font-normal uppercase tracking-wider text-white transition-all duration-500
                    ${isExpanded ? 'text-[22px] sm:text-[28px] md:text-[32px] opacity-100 translate-y-0' : 'text-[14px] sm:text-[16px] md:text-[18px] opacity-80 lg:-rotate-90 lg:translate-y-[-40px] lg:origin-left'}
                  `}>
                                        {member.name}
                                    </h3>

                                    <span className={`font-['Inter_Variable'] tracking-[0.15em] font-bold text-[#D4FF00] text-[10px] sm:text-[12px] transition-all duration-500 mt-1
                    ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
                  `}>
                                        {member.role}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}