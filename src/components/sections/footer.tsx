import { Link } from 'react-router-dom'

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#24151B] text-white pt-12 sm:pt-16 md:pt-20 pb-6 overflow-hidden relative">
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">

        {/* ========================================================= */}
        {/* TOP SECTION: Links, Contacts and Brand Details Grid        */}
        {/* ========================================================= */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-28 items-start mb-16">

          {/* Column 1: Brand Logo & Office Addresses (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            {/* Main Brand Vector Logo */}
            <div className="flex items-center gap-2 mb-8">
              <img src="/icons/Logo.png" alt="Syntrix Creative Logo" className="h-10 sm:h-10 md:h-20 object-contain" />
            </div>

            {/* Address Block 01 */}
            <div className="mb-6">
              <h4 className="font-['Anton'] text-[20px] text-white uppercase mb-2">CONTACT US</h4>
              <p className="font-['Inter_Variable'] text-[16px] text-[#AFAFAF] leading-relaxed font-light max-w-[200px]">
                123 Montra Studio Bulevard.,<br />Los Angeles, CA 90210
              </p>
            </div>

            {/* Address Block 02 */}
            <div>
              <h4 className="font-['Anton'] text-[20px] text-white uppercase mb-2">CONTACT US</h4>
              <p className="font-['Inter_Variable'] text-[16px] text-[#AFAFAF] font-light">
                +1 (800) 234-5678
              </p>
            </div>
          </div>

          {/* Column 2: Pages Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left sm:pl-4">
            <h4 className="font-['Anton'] text-[32px] text-[#EAF261] uppercase mb-6">PAGES</h4>
            <ul className="flex flex-col gap-3 font-['Inter_Variable'] text-[16px] text-[#AFAFAF] font-light">
              {pageLinks.map((page) => (
                <li key={page.label}>
                  <Link to={page.to} className="hover:text-[#FF5533] transition-colors duration-200">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Connect Profiles (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-['Anton'] text-[32px] text-[#EAF261] uppercase mb-6">CONNECT WITH US</h4>
            <ul className="flex flex-col gap-3 font-['Inter_Variable'] text-[16px] text-[#AFAFAF] font-light w-full">
              {[
                { name: 'Pinterest', icon: '' },
                { name: 'Github', icon: '' },
                { name: 'Linkeind', icon: '' },
                { name: 'Behance', icon: '' },
                { name: 'Dribbble', icon: '' },
                { name: 'X Twitter', icon: '' }
              ].map((social) => (
                <li key={social.name} className="flex items-center gap-3">
                  <span className="text-[#D4FF00] font-mono text-[12px] w-4 text-center">{social.icon}</span>
                  <a href={`#${social.name.toLowerCase()}`} className="hover:text-[#FF5533] transition-colors duration-200">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Contact Communications (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Phone Identity Block */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center lg:items-start lg:flex-col xl:flex-row xl:items-center justify-between w-full gap-4 border-b border-white/5 pb-4">
              <span className="font-['Anton'] text-[24px] sm:text-[28px] md:text-[32px] text-white tracking-wide leading-none">
                (+23) 4356 2345
              </span>
              <span className="font-['Anton'] text-[20px] text-[#AFAFAF] uppercase leading-none self-start sm:self-center lg:self-start xl:self-center">
                PHONE NUMBER
              </span>
            </div>

            {/* Email Identity Block */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center lg:items-start lg:flex-col xl:flex-row xl:items-center justify-between w-full gap-4 border-b border-white/5 pb-4">
              <span className="font-['Anton'] text-[22px] sm:text-[26px] md:text-[28px] text-white tracking-wide leading-none break-all">
                syntrix@info.com
              </span>
              <span className="font-['Anton'] text-[20px] tracking-widest text-[#AFAFAF] uppercase leading-none self-start sm:self-center lg:self-start xl:self-center">
                EMAIL ADDRESS
              </span>
            </div>

            {/* Mini Overview Meta Paragraph */}
            <p className="font-['Inter_Variable'] text-[16px] sm:text-[13px] text-[#AFAFAF] leading-relaxed font-light max-w-[360px]">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* MIDDLE CONTINUOUS TEXT LOOP MARQUEE LAYER                  */}
      {/* ========================================================= */}
      <div className="w-full relative overflow-hidden bg-transparent my-4 pointer-events-none select-none">
        {/* Style injection for seamless text transitions */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes footerTextMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-footer-text {
            animation: footerTextMarquee 20s linear infinite;
          }
        `}} />

        <div className="flex w-max whitespace-nowrap animate-footer-text">
          {/* Loop Text block duplicated for infinite cycle visualization */}
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="font-['Anton'] text-[70px] sm:text-[100px] md:text-[140px] lg:text-[170px] uppercase leading-none tracking-wider pr-12 select-none text-white"

            >
              SYNTRIX CREATIVE
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* BOTTOM RIGHTS BAR: Copyrights & System Disclaimers        */}
      {/* ========================================================= */}
      <div className="w-full border-t border-white/5 pt-6 mt-4">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">

          <span className="font-['Inter_Variable'] text-[16px] text-white font-light">
            Syntrix Creative Agency © 2026 All rights reserved
          </span>

          <div className="flex items-center gap-6 font-['Inter_Variable'] text-[16px] text-white font-light">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Services</a>
          </div>

        </div>
      </div>

    </footer>
  );
}