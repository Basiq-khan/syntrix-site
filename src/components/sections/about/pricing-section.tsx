import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Best for small brands taking their first step.',
    features: [
      'Brand identity package',
      'Up to 3 custom design pages',
      'Social media kit',
      'Basic SEO setup',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Ideal for growing businesses that need full coverage.',
    features: [
      'Everything in Starter',
      'Up to 10 custom design pages',
      'Social media campaign management',
      'Advanced SEO optimization',
      'Monthly analytics & consultation',
      'Priority email and phone support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$1999',
    description: 'For established brands ready to scale globally.',
    features: [
      'Everything in Professional',
      'Unlimited design pages',
      'Full marketing campaign management',
      'Dedicated account manager',
      'Quarterly strategy workshops',
      '24/7 priority support',
    ],
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section className="w-full bg-[#000219] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-355 mx-auto flex flex-col gap-12 md:gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/icons/dark-star.png"
              alt="Star Icon"
              className="w-8 h-8 object-contain animate-spin"
              style={{ animationDuration: '4s' }}
            />
            <span className="font-['Anton'] font-normal text-[14px] tracking-widest text-[#D4FF00] uppercase">
              Pricing
            </span>
          </div>
          <h2 className="font-['Anton'] font-normal text-[32px] sm:text-[48px] md:text-[60px] leading-[1.05] uppercase tracking-wide">
            Choose Your Plan
          </h2>
          <p className="font-['Inter_Variable'] text-[14px] sm:text-[15px] text-white/60 leading-relaxed font-light max-w-[560px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Congue aptent placerat neque senectus amet cras efficitur aptent malesuada.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-8 p-6 sm:p-8 transition-all duration-300 ${plan.highlight
                ? 'bg-[#D4FF00] text-[#1A1A1A] md:-translate-y-4 shadow-2xl'
                : 'bg-white text-black'
                }`}
            >
              <div className="flex flex-col gap-2">
                <span className={`font-['Anton'] text-[14px] uppercase tracking-widest ${plan.highlight ? 'text-[#3C222D]' : 'text-[#FF5533]'}`}>
                  {plan.name}
                </span>
                <div className="flex items-end gap-2">
                  <span className="font-['Anton'] text-[44px] sm:text-[52px] leading-none tracking-wide">
                    {plan.price}
                  </span>
                  <span className={`font-['Inter_Variable'] text-[13px] font-light pb-1 ${plan.highlight ? 'text-[#1A1A1A]/60' : 'text-black/50'}`}>
                    / project
                  </span>
                </div>
                <p className={`font-['Inter_Variable'] text-[13px] sm:text-[14px] leading-relaxed font-light ${plan.highlight ? 'text-[#1A1A1A]/70' : 'text-black/60'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-['Inter_Variable'] text-[13px] sm:text-[14px] font-light">
                    <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-[#3C222D] text-[#D4FF00]' : 'bg-[#D4FF00] text-[#1A1A2E]'
                      }`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center font-['Anton'] font-normal text-[13px] sm:text-[14px] px-6 py-3 uppercase tracking-widest transition-all duration-300 border-2 ${plan.highlight
                  ? 'border-[#3C222D] text-[#3C222D] hover:bg-[#3C222D] hover:text-[#D4FF00]'
                  : 'border-[#D4FF00] text-black hover:bg-[#D4FF00] hover:text-[#3C222D]'
                  }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
