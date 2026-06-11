import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 w-full bg-[#000219] border-b border-white/8 transition-colors duration-300">
      <div className="mx-auto flex h-16 sm:h-[72px] lg:h-[90px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group no-underline">
          <img
            src="/icons/logo-new.png"
            alt="Syntrix Logo"
            className="h-13 sm:h-[34px] lg:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-['Anton'] font-normal text-base text-white uppercase tracking-[0.5px] relative transition-colors duration-300 py-1 hover:text-[#FD683E] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-[#FD683E] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Phone */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a href="tel:+4387956739876" className="flex items-center gap-2.5 no-underline transition-transform duration-300 hover:-translate-y-0.5 group">
            <div>
              <img
                src="/icons/Background (3).png"
                alt="Phone"
                className="w-10 h-10 object-contain rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(255,179,67,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/50 uppercase tracking-widest leading-none mb-1 font-sans">Phone Number</span>
              <span className="font-['Anton'] font-normal text-sm text-white tracking-[0.3px] transition-colors duration-300 group-hover:text-[#FFB343]">
                + 43 879 5673 9876
              </span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex lg:hidden flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-2 z-1001 outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[26px] h-0.5 bg-white rounded-[4px] transition-all duration-300 origin-center ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
          <span className={`block w-[26px] h-0.5 bg-white rounded-[4px] transition-all duration-300 origin-center ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
          <span className={`block w-[26px] h-0.5 bg-white rounded-[4px] transition-all duration-300 origin-center ${mobileMenuOpen ? 'translate-y-[-7px] -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 right-0 bottom-0 top-16 md:top-[72px] z-999 bg-[#000219]/90 backdrop-blur-md p-6 md:p-10 flex lg:hidden flex-col justify-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
      >
        <ul className="list-none m-0 p-0 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-['Anton'] font-normal text-base md:text-xl text-white uppercase tracking-wider py-2 block border-b border-white/6 transition-all duration-300 hover:text-[#FFB343] hover:pl-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-5">
          <a href="tel:+4387956739876" className="flex items-center gap-2.5 no-underline transition-transform duration-300 hover:-translate-y-0.5 group justify-start">
            <img
              src="/icons/Background.png"
              alt="Phone"
              className="w-10 h-10 object-contain rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(255,179,67,0.4)]"
            />
            <span className="font-['Anton'] font-normal text-sm text-white tracking-[0.3px] transition-colors duration-300 group-hover:text-[#FFB343]">
              + 43 879 5673 9876
            </span>
          </a>
        </div>
      </div>
    </nav>
  )
}
