export default function CTASection() {
    return (
        <section className="w-full bg-[#EAEAEA]">
            {/* Main outer container mapping exact dynamic boundaries */}
            <div className="mx-auto relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[580px] overflow-hidden group">

                {/* ========================================================= */}
                {/* BACKGROUND LAYER: Parallax/Cover Action Visual Context     */}
                {/* ========================================================= */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="8090ddf1651fad34a1a0a2042e7550b2761975fe.jpg"
                        alt="Station Subway Motion Context"
                        className="w-full h-full object-cover"
                    />
                    {/* Subtle clean darkening atmospheric blend filter layer */}
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                </div>

                {/* ========================================================= */}
                {/* FLOATING TEXT PANEL CARD: Absolute locked layer container */}
                {/* ========================================================= */}
                {/* Parent card wrapper matching exact layer layouts */}
                <div className="absolute left-170 -bottom-40 sm:w-[85%] md:w-[70%] lg:w-[48%] bg-[#3C222D] p-8 sm:p-12 md:p-6 mb-10 min-h-[220px] sm:min-h-[180px] md:min-h-[240px] z-10 overflow-hidden relative">

                    {/* ========================================================= */}
                    {/* MAIN TEXT CONTENT WRAPPER: Forced to sit ON TOP with z-20 */}
                    {/* ========================================================= */}
                    {/* 1. Isko w-full aur absolute stack par lock kar diya taaki text layer base container ke order se azaad ho jaye */}
                    <div className="w-full relative z-20 pointer-events-auto">
                        <h2 className="font-['Anton'] font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[66px] text-white leading-[1.02] uppercase tracking-wide mb-8 sm:mb-10">
                            LET'S CREATE SOMETHING
                            EXTRAORDINARY<br/> TOGETHER.
                        </h2>

                        {/* Micro Trigger Action Outline Button */}
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center font-['Anton'] font-normal text-[12px] text-white bg-transparent border border-[#D4FF00] px-6 py-2.5 uppercase tracking-widest hover:bg-[#D4FF00] hover:text-[#3C222D] transition-all duration-300 relative z-30"
                        >
                            CONTACT US
                        </a>
                    </div>

                    {/* ========================================================= */}
                    {/* DYNAMIC CIRCULAR TYPOGRAPHIC SPINNING BADGE LAYER         */}
                    {/* ========================================================= */}
                    {/* Bottom Right Corner positioning boundaries lock */}
                    {/* 2. Isko absolute coordinates par tightly fix rakha hai taaki text layout ko touch na kare */}
                    <div className="absolute right-[-40px] sm:right-[-60px] md:right-[-80px] bottom-[-40px] sm:bottom-[-60px] md:bottom-[-80px] w-[180px] sm:w-[260px] md:w-[320px] lg:w-[360px] h-[180px] sm:h-[260px] md:h-[320px] lg:h-[360px] z-10 pointer-events-none select-none mix-blend-screen opacity-90">

                        {/* Spinning wrapper using responsive speed parameters */}
                        <div
                            className="w-full h-full animate-spin"
                            style={{ animationDuration: '12s' }} // Speed yahan se slow/fast kar sakte ho (12s ekdam smooth chalega)
                        >
                            <img
                                src="/SVG (2).png"
                                alt="Spinning Text Stamp"
                                className="w-full h-full object-contain pointer-events-none select-none"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}