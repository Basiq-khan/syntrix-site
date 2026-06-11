import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Address',
    value: 'contact@syntrix.com',
    href: 'mailto:contact@syntrix.com',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: '+43 879 5673 9876',
    href: 'tel:+4387956739876',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: '123 Creative Avenue, Suite 456, Cityville, USA',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday - Friday, 9:00 AM - 6:00 PM',
  },
]

export function ContactSection() {
  return (
    <section
      className="w-full py-10 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-355 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

        {/* Left: Form Card */}
        <div className="bg-[#262626] p-6 sm:p-10 md:p-12 flex flex-col gap-8">
          <h2 className="font-['Anton'] font-normal text-[28px] sm:text-[36px] uppercase tracking-wide text-white">
            Send a <span className="text-[#FD683E]">Message.</span>
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent text-white font-['Inter_Variable'] text-[14px] pb-3 placeholder-white/40 border-b border-[#FF5533] outline-none transition-colors duration-300 focus:border-[#D4FF00]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent text-white font-['Inter_Variable'] text-[14px] pb-3 placeholder-white/40 border-b border-[#FF5533] outline-none transition-colors duration-300 focus:border-[#D4FF00]"
              required
            />
            <input
              type="tel"
              placeholder="Telephone"
              className="w-full bg-transparent text-white font-['Inter_Variable'] text-[14px] pb-3 placeholder-white/40 border-b border-[#FF5533] outline-none transition-colors duration-300 focus:border-[#D4FF00]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent text-white font-['Inter_Variable'] text-[14px] pb-3 placeholder-white/40 border-b border-[#FF5533] outline-none transition-colors duration-300 focus:border-[#D4FF00]"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent text-white font-['Inter_Variable'] text-[14px] pb-3 placeholder-white/40 border-b border-[#FF5533] outline-none transition-colors duration-300 focus:border-[#D4FF00] resize-none"
              required
            />

            <button
              type="submit"
              className="w-fit bg-transparent text-white border border-[#D4FF00] font-['Anton'] font-normal text-[14px] tracking-widest uppercase px-10 py-3 mt-2 transition-all duration-300 hover:bg-[#D4FF00] hover:text-[#1A1A2E]"
            >
              Submit Your Inquiry
            </button>
          </form>
        </div>

        {/* Right: Info + Map */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img
                src="/icons/2-PNG.png.png"
                alt="Star Icon"
                className="w-7 h-7 object-contain animate-spin brightness-0"
                style={{ animationDuration: '3s' }}
              />
              <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-[#3C222D] uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="font-['Anton'] font-normal text-[32px] sm:text-[48px] md:text-[56px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
              We're Here <span className="text-[#FD683E]">to Help.</span>
            </h2>
            <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] leading-relaxed text-[#555555] max-w-lg">
              Whether you have a question, need assistance, or want to start a project, our team is ready to assist you. Reach out to us through any of the channels below, and we'll get back to you promptly.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <div key={info.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#D4FF00] text-[#3C222D] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-['Anton'] text-[12px] uppercase tracking-widest text-[#3C222D]">
                      {info.label}
                    </span>
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-['Inter_Variable'] text-[14px] text-[#FD683E] hover:text-[#3C222D] transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="font-['Inter_Variable'] text-[14px] text-[#555555]">
                      {info.value}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Map */}
          <div className="w-full h-[280px] sm:h-[320px] overflow-hidden grayscale-20">
            <iframe
              title="Office Location"
              src="https://maps.google.com/maps?q=London%20Eye&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
