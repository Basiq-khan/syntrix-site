import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full syntrix-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img src="/icons/logo-new.png" alt="Syntrix Logo" className="" />
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="navbar-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Phone + CTA */}
        <div className="navbar-right">
          <a href="tel:+1234567890" className="navbar-phone">
            <div>
                <img src="/icons/Background (3).png" alt="Phone" className="navbar-phone-icon" />
            </div>
            <div className='flex flex-col'>
                <span className="text-white">Phone Number</span>
                <span className="navbar-phone-text">+ 43 879 5673 9876</span>
            </div>
            
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-mobile-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar-mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-bottom">
          <a href="tel:+1234567890" className="navbar-phone navbar-phone--mobile">
            <img src="/icons/Background.png" alt="Phone" className="navbar-phone-icon" />
            <span className="navbar-phone-text">+ 43 879 5673 9876</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
