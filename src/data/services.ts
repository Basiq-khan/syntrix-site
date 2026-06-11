import { Fingerprint, MonitorSmartphone, TrendingUp, PenTool, Camera, Smartphone, Clapperboard, type LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  icon: LucideIcon
  image: string
  shortDescription: string
  description: string[]
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'branding-and-identity',
    title: 'Branding and Identity',
    icon: Fingerprint,
    image: '/icons/cosmetic-branding-mockup-AHXNTAL-800x533.jpg.png',
    shortDescription: 'We craft distinct visual identities — logos, color systems, and brand guidelines that make your business instantly recognizable.',
    description: [
      'Your brand is more than a logo — it is the sum of every impression your business makes. We start by getting to know your goals, audience, and competitors, then translate that strategy into a visual identity that feels unmistakably yours.',
      'Our branding packages cover logo design, color palettes, typography systems, and comprehensive brand guidelines, so your identity stays consistent across every touchpoint — from business cards to billboards.',
      'Whether you are launching a new venture or refreshing an established brand, we build identities that are bold, memorable, and built to scale with you.',
    ],
    features: [
      'Logo design and brand mark systems',
      'Color palette and typography guidelines',
      'Brand voice and messaging strategy',
      'Complete brand style guide documentation',
    ],
  },
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    icon: MonitorSmartphone,
    image: '/icons/macbook-mockup-8Z2Q6TT-800x533.jpg.png',
    shortDescription: 'Fast, responsive websites designed to look great on every device and built to turn visitors into customers.',
    description: [
      'A website is often the first real interaction someone has with your brand. We design and build sites that load fast, look sharp on any screen, and guide visitors toward the actions that matter most to your business.',
      'From single-page landing sites to full multi-page platforms, our development process combines clean design with solid engineering — semantic markup, performance optimization, and SEO best practices baked in from day one.',
      'We also make sure your site is easy to maintain, so you are never locked into depending on us for every small update.',
    ],
    features: [
      'Custom responsive website design',
      'Performance and SEO optimization',
      'CMS integration for easy content updates',
      'Ongoing technical support and maintenance',
    ],
  },
  {
    slug: 'digital-marketing-strategy',
    title: 'Digital Marketing Strategy',
    icon: TrendingUp,
    image: '/group-of-creative-people-working-and-brainstorming-F9J86RY-800x533.jpg.png',
    shortDescription: 'Data-driven marketing strategies across search, social, and paid channels designed to grow your audience and revenue.',
    description: [
      'Great marketing starts with a clear strategy. We dig into your market, your competitors, and your customers to find the channels and messages that will move the needle for your business.',
      'From SEO and content marketing to paid social and search campaigns, we build integrated strategies that work together — not in silos — so every dollar you spend supports the bigger picture.',
      'We track performance closely and adjust in real time, giving you full visibility into what is working and why.',
    ],
    features: [
      'Market research and competitor analysis',
      'SEO and content marketing strategy',
      'Paid social and search campaign management',
      'Monthly performance reporting and insights',
    ],
  },
  {
    slug: 'ui-ux-design-solution',
    title: 'UI/UX Design Solution',
    icon: PenTool,
    image: '/icons/social-media-mockups-K6H3BFT-800x533.jpg.png',
    shortDescription: 'User-centered interface design for web and mobile products that feels intuitive and looks beautiful.',
    description: [
      'Good design is invisible — it just works. Our UI/UX process starts with research and wireframing to map out user flows before a single pixel is designed, ensuring the end product solves real problems for real users.',
      'We design high-fidelity interfaces and interactive prototypes that give you a clear picture of the final product before development begins, reducing costly revisions down the line.',
      'Every interface we design is built around accessibility, clarity, and consistency — so your product feels effortless to use.',
    ],
    features: [
      'User research and journey mapping',
      'Wireframing and interactive prototyping',
      'High-fidelity UI design systems',
      'Usability testing and design iteration',
    ],
  },
  {
    slug: 'content-creation-solution',
    title: 'Content Creation Solution',
    icon: Camera,
    image: '/icons/neon-sign-board-WAG93JB-800x533.jpg.png',
    shortDescription: 'Photography, video, and graphic content production that keeps your brand visible and engaging across every platform.',
    description: [
      'Consistent, high-quality content is what keeps a brand top of mind. We produce photography, video, and graphic assets tailored to how your audience actually consumes content on each platform.',
      'From product shoots and brand films to short-form social content and motion graphics, our content team handles everything from concept and production to editing and final delivery.',
      'We build content libraries that give your marketing team the assets they need to stay active and consistent, month after month.',
    ],
    features: [
      'Photography and videography production',
      'Short-form social media content',
      'Motion graphics and animated assets',
      'Monthly content calendars and batching',
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    image: '/icons/packaging-mockup-8GHVPGT-800x533.jpg.png',
    shortDescription: 'Native and cross-platform mobile apps built for performance, scalability, and a seamless user experience.',
    description: [
      'We design and build mobile apps that feel fast, intuitive, and native to the platform they run on — whether that is iOS, Android, or both at once with cross-platform frameworks.',
      'Our process covers everything from initial product strategy and UI design through development, testing, and app store launch, with a focus on building a foundation that can scale as your user base grows.',
      'Post-launch, we continue to support and iterate on your app based on real user feedback and analytics.',
    ],
    features: [
      'iOS, Android, and cross-platform development',
      'App UI/UX design and prototyping',
      'API integration and backend support',
      'App store submission and post-launch support',
    ],
  },
  {
    slug: 'youtube-automation',
    title: 'YouTube Automation',
    icon: Clapperboard,
    image: '/working-job-career-casual-showing-8GNF7UD-800x533.jpg.png',
    shortDescription: 'Done-for-you YouTube channel management — from research and scripting to editing, uploads, and growth tracking.',
    description: [
      'Growing a YouTube channel takes consistency, strategy, and a lot of moving parts. We handle the entire pipeline — niche research, scripting, voiceover, editing, thumbnails, and uploads — so your channel keeps growing without taking up your time.',
      'Our team builds a content system around proven formats in your niche, optimizing titles, thumbnails, and descriptions for discoverability while keeping your brand voice consistent across every video.',
      'We track watch time, click-through rate, and subscriber growth, and refine the content strategy every month based on what the data tells us.',
    ],
    features: [
      'Niche research and content strategy',
      'Scripting, voiceover, and video editing',
      'Thumbnail design and SEO optimization',
      'Channel analytics and monthly growth reports',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
