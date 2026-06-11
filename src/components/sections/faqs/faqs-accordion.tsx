import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Syntrix offer?',
    answer: 'We offer branding and identity, web design and development, digital marketing strategy, UI/UX design, content creation, and mobile app development — everything a brand needs to grow under one roof.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines depend on scope, but most branding projects take 2-4 weeks, while full website builds typically run 4-8 weeks. We always agree on a clear timeline with milestones before kicking off.',
  },
  {
    question: 'How much does a project cost?',
    answer: 'Every project is scoped individually based on goals and complexity. After an initial consultation, we provide a detailed proposal with transparent pricing — no hidden fees.',
  },
  {
    question: 'Do you work with startups as well as established brands?',
    answer: 'Absolutely. From early-stage startups building their first identity to established brands looking for a refresh, we tailor our process to fit where you are and where you want to go.',
  },
  {
    question: 'What does the design process look like?',
    answer: 'We start with discovery and strategy, move into concept development and design, then refine based on your feedback before final delivery and handoff. You are involved at every key stage.',
  },
  {
    question: 'Will I own the final files and designs?',
    answer: 'Yes. Once a project is completed and paid in full, you receive full ownership of all final deliverables, including source files.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes, we offer flexible maintenance and support packages for websites, social media management, and continued marketing strategy — so your brand keeps growing after launch.',
  },
]

export function FaqsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ background: "url('/885c187d3a8a6f56d114d0a8d2481bf15c7a1d0a.jpg') center/cover no-repeat" }}
    >
      <div className="max-w-[900px] mx-auto flex flex-col gap-12 md:gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex gap-2 items-center">
            <img
              src="/icons/2-PNG.png.png"
              alt="Star Icon"
              className="w-7 h-7 object-contain animate-spin brightness-0"
              style={{ animationDuration: '3s' }}
            />
            <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-[#3C222D] uppercase">
              Need Help?
            </span>
          </div>
          <h2 className="font-['Anton'] font-normal text-[32px] sm:text-[48px] md:text-[60px] leading-[1.05] uppercase tracking-wide text-[#3C222D]">
            Got Questions? <span className="text-[#FD683E]">We've Got Answers.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`transition-all duration-300 ${isOpen ? 'bg-[#3C222D]' : 'bg-[#262626] hover:bg-[#2e2e2e]'}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5 sm:py-6"
                >
                  <span className="font-['Anton'] font-normal text-[16px] sm:text-[20px] uppercase tracking-wide text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#D4FF00] text-[#1A1A2E] flex items-center justify-center shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-7">
                    <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] leading-relaxed font-light text-white/60">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
