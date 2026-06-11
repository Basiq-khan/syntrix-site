export interface BlogPost {
  slug: string
  title: string
  category: string
  date: string
  author: string
  image: string
  excerpt: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'branding-trends-shaping-2026',
    title: 'Branding Trends Shaping 2026',
    category: 'Branding',
    date: 'June 02, 2026',
    author: 'Sarah Jenkins',
    image: '/icons/cosmetic-branding-mockup-AHXNTAL-800x533.jpg.png',
    excerpt: 'From bold typography to adaptive logo systems, here is what separates memorable brands from forgettable ones this year.',
    content: [
      'Brands that win attention in 2026 are the ones that commit to a clear point of view. Minimalism is giving way to confident, expressive identities that feel handmade rather than templated.',
      'Adaptive logo systems are now the norm rather than the exception. A single static mark is no longer enough — brands need a flexible visual language that scales from a favicon to a building wrap without losing personality.',
      'Typography has become a brand asset in its own right. Custom or heavily customized type families help businesses stand out in crowded feeds, and we are seeing more agencies invest in bespoke type as part of the core identity package.',
      'Finally, sustainability and transparency are no longer just marketing buzzwords — audiences expect brands to show their work, and visual identity is increasingly used to communicate values, not just aesthetics.',
    ],
  },
  {
    slug: 'web-design-principles-that-convert',
    title: 'Web Design Principles That Convert',
    category: 'Web Design',
    date: 'May 24, 2026',
    author: 'Liam Johnson',
    image: '/icons/macbook-mockup-8Z2Q6TT-800x533.jpg.png',
    excerpt: 'A great-looking website means nothing if it does not move people to act. Here are the principles we apply to every project.',
    content: [
      'Every page should have one clear job. Before a single pixel is placed, we define the primary action we want a visitor to take and design everything else to support that goal.',
      'Speed is a design decision, not just an engineering one. Large hero videos and unoptimized images quietly kill conversion rates — we build performance budgets into the design phase from day one.',
      'Visual hierarchy guides the eye before the user even starts reading. Strong contrast, deliberate spacing, and a consistent type scale make pages feel effortless to scan.',
      'Finally, we treat mobile as the primary experience, not an afterthought. Most of our clients see the majority of their traffic on smaller screens, so layouts are designed mobile-first and enhanced for desktop.',
    ],
  },
  {
    slug: 'social-media-campaigns-that-actually-work',
    title: 'Social Media Campaigns That Actually Work',
    category: 'Social Media',
    date: 'May 12, 2026',
    author: 'Emily Davis',
    image: '/icons/social-media-mockups-K6H3BFT-800x533.jpg.png',
    excerpt: 'Going viral is not a strategy. Here is how we build social campaigns that build real, lasting brand affinity.',
    content: [
      'Consistency beats virality. Brands that post with a recognizable voice and visual style — even at a modest frequency — build more trust than accounts chasing one-off viral moments.',
      'Every platform has its own grammar. Content repurposed without adaptation tends to underperform, so we tailor format, pacing, and tone for each channel rather than copy-pasting across platforms.',
      'Community management is part of the campaign, not an afterthought. Replying to comments and DMs in your brand voice turns casual followers into advocates.',
      'We measure success against business outcomes, not just likes — tracking how social activity moves people toward a purchase, sign-up, or store visit.',
    ],
  },
  {
    slug: 'motion-graphics-for-modern-brands',
    title: 'Motion Graphics for Modern Brands',
    category: 'Motion Graphics',
    date: 'April 28, 2026',
    author: 'Marcus Vance',
    image: '/icons/neon-sign-board-WAG93JB-800x533.jpg.png',
    excerpt: 'Motion is no longer a nice-to-have. Here is how short-form animation is becoming central to brand storytelling.',
    content: [
      'Attention spans are short, but motion captures it instantly. Even a few seconds of well-timed animation can communicate a brand feeling that static visuals struggle to convey.',
      'We design motion systems, not one-off clips — a consistent set of transitions, easing curves, and visual motifs that can be reused across ads, product demos, and social content.',
      'Sound design matters as much as visuals. A subtle audio cue paired with motion creates a multi-sensory brand signature that audiences start to recognize.',
      'Most importantly, motion should clarify, not decorate. The best animated explainers make a complex idea feel simple — that is the bar we hold every project to.',
    ],
  },
  {
    slug: 'packaging-design-that-sells-on-the-shelf',
    title: 'Packaging Design That Sells on the Shelf',
    category: 'Packaging',
    date: 'April 10, 2026',
    author: 'Sarah Jenkins',
    image: '/icons/packaging-mockup-8GHVPGT-800x533.jpg.png',
    excerpt: 'Packaging is often the first physical touchpoint a customer has with your brand. Here is how to make it count.',
    content: [
      'You have less than three seconds to catch a shopper\'s eye on a crowded shelf. Bold color blocking and a clear focal point make the difference between being picked up and being passed over.',
      'Materials communicate value before words do. The texture and finish of packaging signals quality, sustainability, or premium positioning long before someone reads the label.',
      'Information hierarchy on packaging should mirror the customer journey — brand name and key benefit first, supporting details second, fine print last.',
      'We always prototype packaging in physical form. Renders can be deceiving — how a design feels in hand is just as important as how it looks on screen.',
    ],
  },
  {
    slug: 'building-a-marketing-strategy-from-scratch',
    title: 'Building a Marketing Strategy From Scratch',
    category: 'Marketing',
    date: 'March 30, 2026',
    author: 'Liam Johnson',
    image: '/group-of-creative-people-working-and-brainstorming-F9J86RY-800x533.jpg.png',
    excerpt: 'For early-stage brands, a focused strategy beats a scattered one. Here is the framework we use with new clients.',
    content: [
      'Start with a single audience, not everyone. Trying to speak to all potential customers at once usually means speaking clearly to none of them.',
      'Pick one or two channels and go deep before expanding. A focused presence on the right platform outperforms a thin presence across many.',
      'Define what success looks like in numbers before launching anything — leads, sign-ups, sales — so creative decisions can be measured against real outcomes.',
      'Revisit the strategy every quarter. What works in month one rarely stays optimal forever, and the best marketing teams treat strategy as a living document.',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
