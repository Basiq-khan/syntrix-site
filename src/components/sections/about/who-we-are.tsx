import { Link } from 'react-router-dom'

export function WhoWeAre() {
    return (
        <section className="w-full text-[#3C222D] py-10 px-4 sm:px-6 md:px-10 overflow-hidden min-h-screen"
            style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
        >
            <div className="max-w-[1420px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-3 items-center">

                {/* ======================================================== */}
                {/* LEFT COLUMN (Title, Desc & Features) - Span 4 */}
                {/* ======================================================== */}
                <div className="lg:col-span-4 flex flex-col gap-6 md:gap-4 z-10">

                    {/* Tagline */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/icons/2-PNG.png.png"
                            alt="Star Icon"
                            className="w-8 h-8 object-contain animate-spin brightness-0"
                            style={{ animationDuration: '3s' }}
                        />
                        <span className="font-['Anton'] font-normal text-[20px] tracking-widest uppercase">
                            Who We Are
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="font-['Anton'] font-normal text-[40px] sm:text-[50px]  xl:text-[75px] leading-[1.05] uppercase tracking-tight">
                        Creativity <br /> Meets Strategy.
                    </h2>

                    {/* Description */}
                    <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] text-[#1A1A1A]/80 leading-relaxed font-light max-w-[380px]">
                        With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
                    </p>

                    {/* Features List */}
                    <div className="flex flex-col gap-5 mt-2">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4">
                            <div className=" flex items-center justify-center">
                                {/* Lightbulb / Brain Icon */}
                                <img src="/icons/Background (4).png" alt="Lightbulb Icon" />
                            </div>
                            <span className="font-['Anton'] font-normal text-[16px] sm:text-[20px] md:text-[24px] uppercase tracking-wide">
                                Over 10 Years of Experience
                            </span>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4">
                            <div className=" flex items-center justify-center">
                                {/* Megaphone / Badge Icon */}
                                <img src="/icons/Background (5).png" alt="Lightbulb Icon" />
                            </div>
                            <span className="font-['Anton'] font-normal text-[16px] sm:text-[20px] md:text-[24px] uppercase tracking-wide">
                                Trusted by Global Brands
                            </span>
                        </div>
                    </div>

                </div>

                {/* ======================================================== */}
                {/* CENTER COLUMN (Main Character Cutout Image) - Span 4 */}
                {/* ======================================================== */}
                <div className="lg:col-span-4 flex justify-center items-end relative min-h-[350px] sm:min-h-[450px] lg:h-full mt-6 lg:mt-30">
                    {/* Decorative Back Box */}
                    <div className="absolute w-[240px] h-[300px] sm:w-[330px] sm:h-[360px] border-black border-6 bg-[#FD683E] rounded-sm bottom-3 left-1/2 -translate-x-1/2 translate-y-2 z-0"></div>

                    {/* Main Image */}
                    <img
                        src="/Png-1-1.png.png" /* Apni main central image ka path laga lena */
                        alt="Creativity Meets Strategy"
                        className="relative z-10 w-[260px] sm:w-[490px]  object-center object-contain h-auto"
                        draggable={false}
                    />
                </div>

                {/* ======================================================== */}
                {/* RIGHT COLUMN (Mini Widget & Progress Bars) - Span 4 */}
                {/* ======================================================== */}
                <div className="lg:col-span-4 flex flex-col gap-5 z-10 w-full">

                    {/* Mini Top-Right Image Box Card */}
                    <div className="w-full h-[180px] sm:h-[220px] lg:h-[200px] self-start lg:self-end overflow-hidden rounded-sm">
                        <img
                            src="/smiling-young-african-woman-working-online-with-a-3M7W2SX-800x533.jpg.png" /* Mini laptop working image ka path */
                            alt="Workspace"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Progress Bars Block */}
                    <div className="flex flex-col gap-5 w-full">

                        {/* Bar 1 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center font-['Anton'] text-[16px] uppercase tracking-wide">
                                <span>Successful Campaign Launches</span>
                                <span>95%</span>
                            </div>
                            <div className="w-full h-[16px] bg-white rounded-full overflow-hidden">
                                <div className="h-full bg-[#FD683E] rounded-full" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        {/* Bar 2 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center font-['Anton'] text-[16px] uppercase tracking-wide">
                                <span>Innovative Design</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full h-[16px] bg-white rounded-full overflow-hidden">
                                <div className="h-full bg-[#EAF261] rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        {/* Bar 3 */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center font-['Anton'] text-[16px] uppercase tracking-wide">
                                <span>High Impact Project</span>
                                <span>100%</span>
                            </div>
                            <div className="w-full h-[16px] bg-[#313131] rounded-full overflow-hidden">
                                <div className="h-full bg-black rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Small Description text */}
                    <p className="font-['Inter_Variable'] text-[13px] text-[#1A1A1A]/70 leading-relaxed font-light">
                        Consectetuer adipiscing congue aptent placera senec efficitur aptent malesuada sit conubia tincidunt iaculis.
                    </p>

                    {/* About Us Outline Button */}
                    <div className="flex items-center gap-4 mt-2 ml-0">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 font-['Anton'] text-[14px] text-black bg-transparent border-2 border-[#FD683E] px-6 py-3 uppercase tracking-wider hover:bg-[#FD683E] hover:text-[#1A1A2E] transition-all duration-300"
                        >
                            Contact Us
                            <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                <img src="/icons/Vector (1).png" alt="Arrow" />
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}