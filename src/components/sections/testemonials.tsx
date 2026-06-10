export default function TestimonialsCarousel() {
    // Testimonials data exactly matching the visual content rules
    const testimonials = [
        {
            stars: 5,
            text: "“Aurelia transformed our branding into something modern and vibrant. They were attentive to every detail and always went the extra mile. Their work has made a significant impact on our business visibility.”",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
            name: "SOPHIA MARTINEZ",
            role: "Marketing Manager"
        },
        {
            stars: 5,
            text: "“The creative team at Aurelia is outstanding. They took our ideas and shaped them into something truly innovative and unique. We're beyond satisfied with the results!”",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            name: "LIAM CHEN",
            role: "CEO"
        },
        {
            stars: 5,
            text: "“Working with this team was an absolute game changer for our digital presence. The attention to speed, aesthetics, and clean user flows exceeded all our expectations.”",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            name: "EMMA WATSON",
            role: "Product Owner"
        }
    ];

    // Testimonials carousel currently renders as a continuous marquee.
    // Navigation state is not needed for this version of the section.

    return (
        <section className="w-full bg-[#3C222D] text-white px-6 py-20 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col">

                {/* ========================================================= */}
                {/* TOP BANNER ROW: Section Header & Slider Controls          */}
                {/* ========================================================= */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">

                    {/* Left Wing Title Block with Branding Spark Vector */}
                    <div className="md:flex items-center md:gap-50 text-left">
                        <div className="shrink-0 flex items-center gap-2">
                            {/* Distinct 4-pointed layout identity star asset */}
                            <img
                                src="icons/2-PNG.png (3).png"
                                alt="Testimonial Spark"
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            />
                            <span className="font-['Anton'] text-[20px] uppercase text-white pt-0.5">
                                TESTIMONIALS
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-50 sm:gap-4 md:gap-50">
                            <h2 className="font-['Anton'] font-normal text-[36px] sm:text-[44px] md:text-[56px] lg:text-[62px] uppercase tracking-wide leading-none">
                                WHAT OUR CLIENT SAYS
                            </h2>
                        </div>
                    </div>

                    {/* Right Wing Navigation Slider Buttons */}
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                        <button
                            type="button"
                            className="gap-3 inline-flex items-center justify-center font-['Anton'] text-[20px] text-white bg-transparent border border-[#D4FF00] px-6 py-2 uppercase tracking-widest hover:bg-[#D4FF00] hover:text-[#3C222D] transition-all duration-300 group"
                        >
                            VIEW MORE <img src="icons/SVG.png" alt="Next" className="w-5 h-5 object-contain group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                </div>

                {/* ========================================================= */}
                {/* SLIDER WRAPPER LAYER: Continuous CSS Marquee Loop Track    */}
                {/* ========================================================= */}
                <div className="w-full relative overflow-hidden">
                    {/* Tailwind layer injection config for smooth linear translation movement */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
    @keyframes marqueeContinuous {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-continuous {
      animation: marqueeContinuous 25s linear infinite;
    }
    .animate-marquee-continuous:hover {
      animation-play-state: paused;
    }
  `}} />

                    {/* Double width container mounting original + clone array for infinite scrolling flow */}
                    <div className="flex w-max gap-4 sm:gap-6 animate-marquee-continuous">

                        {/* Array Loop Stack (Original + Duplicate combined for endless loop) */}
                        {[...testimonials, ...testimonials].map((item, idx) => (
                            <div
                                key={idx}
                                // Width configuration: Exactly 2 cards visible on desktop (calc(50% - gap)), 1 full card on mobile
                                className="w-[280px] sm:w-[380px] md:w-[460px] lg:w-[620px] bg-[#313131] p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[340px] sm:min-h-[320px] relative overflow-hidden rounded-sm transition-all duration-300 border border-white/5 shrink-0"
                            >

                                {/* Content Area Stack */}
                                <div className="w-full flex flex-col items-start text-left">
                                    {/* Rating Vector Starts Lineup */}
                                    <div className="flex items-center gap-1 mb-6 text-white text-[14px]">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>

                                    {/* Core Review Quotation Text Paragraph */}
                                    <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] md:text-[16px] text-white leading-relaxed font-light mb-8 max-w-[480px]">
                                        {item.text}
                                    </p>
                                </div>

                                {/* Identity Footer Area Row */}
                                <div className="w-full flex justify-between items-end mt-auto">
                                    {/* Avatar & Meta Text Group */}
                                    <div className="flex items-center gap-3.5">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover grayscale border border-white/10"
                                        />
                                        <div className="flex flex-col text-left">
                                            <h4 className="font-['Anton'] font-normal text-[16px] uppercase tracking-wide leading-tight">
                                                {item.name}
                                            </h4>
                                            <span className="font-['Inter_Variable'] text-[11px] text-[#FF5533] uppercase font-semibold tracking-wider mt-0.5">
                                                {item.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Massive Decorative Background Quote Asset Clamped Right */}
                                    <div className="text-[#D4FF00] opacity-80 pointer-events-none select-none">
                                        {/* Double quotes vector block matching exact template style */}
                                        <svg className="w-10 h-10 md:w-12 md:h-12 fill-current" viewBox="0 0 32 32">
                                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}