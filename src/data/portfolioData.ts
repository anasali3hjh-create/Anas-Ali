import { Project, ServiceItem, ProcessStep, ToolCategory } from '../types';

export const HERO_STATS = [
  {
    number: "20+",
    label: "Projects Created",
    description: "Delivering distinct identities and bespoke digital content."
  },
  {
    number: "10+",
    label: "Design Concepts",
    description: "Explorative typography, packaging systems and print."
  },
  {
    number: "2+",
    label: "Years Learning & Creating",
    description: "Dedicated to disciplined visual craft and creative experiments."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "brand-identity-system",
    number: "01",
    title: "BRAND IDENTITY SYSTEM",
    category: "Branding",
    shortDescription: "Visual brand identity, custom logotype architecture, and collateral design system.",
    year: "2025",
    client: "Brand Identity Commission",
    brief: "Craft a modern, high-impact brand identity system designed to communicate authority, elegance, and distinct visual presence across print and digital media.",
    process: "Developed bespoke typographic lockups, geometric marks, cohesive color palettes, and comprehensive brand guidelines for versatile multi-channel execution.",
    result: "Established a unified brand ecosystem deployed across packaging, stationery, digital assets, and customer touchpoints.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    image: "https://i.ibb.co/NnS3Fg2t/Capture-7.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[4/5]",
    colorPalette: ["#050505", "#F5A623", "#F5F3EE", "#333333"],
    galleryImages: [
      {
        url: "https://i.ibb.co/NnS3Fg2t/Capture-7.png",
        caption: "Core brand identity mark and typography showcase"
      },
      {
        url: "https://i.ibb.co/NnS3Fg2t/Capture-7.png",
        caption: "Brand system collateral and visual execution"
      }
    ]
  },
  {
    id: "social-media-design-1",
    number: "01",
    title: "COLD COFFEE",
    category: "Social Media",
    shortDescription: "Cold coffee social media campaign artwork and promotional creative.",
    year: "2025",
    image: "https://i.ibb.co/d0DKXcyn/Capture-2.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[7/10]",
    objectFit: "contain"
  },
  {
    id: "social-media-post-2",
    number: "02",
    title: "SOCIAL MEDIA POST 02",
    category: "Social Media",
    shortDescription: "Creative social media visual campaign artwork and promotional design.",
    year: "2025",
    image: "https://i.ibb.co/4wsSGNG6/Capture-7.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[4/5]",
    objectFit: "contain"
  },
  {
    id: "social-media-post-3",
    number: "03",
    title: "SOCIAL MEDIA POST 03",
    category: "Social Media",
    shortDescription: "Square social media post campaign artwork and promotional visual.",
    year: "2025",
    image: "https://i.ibb.co/7tDtGGXv/Capture-8.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[1/1]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/7tDtGGXv/Capture-8.png",
        caption: "Square social media post campaign artwork"
      }
    ]
  },
  {
    id: "social-media-post-4",
    number: "04",
    title: "SOCIAL MEDIA POST 04",
    category: "Social Media",
    shortDescription: "Visual campaign promotional artwork and social media creative.",
    year: "2025",
    image: "https://i.ibb.co/wFBqv5ZG/Capture-6.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[1/1]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/wFBqv5ZG/Capture-6.png",
        caption: "Social media visual design and campaign composition"
      }
    ]
  },
  {
    id: "poster-rich-kids-toy",
    number: "01",
    title: "RICH KIDS TOY",
    category: "Posters",
    shortDescription: "Editorial poster artwork & creative visual composition.",
    year: "2025",
    image: "https://i.ibb.co/JjGy9v3J/Capture5.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[4/5]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/JjGy9v3J/Capture5.png",
        caption: "Rich Kids Toy editorial poster artwork"
      }
    ]
  },
  {
    id: "poster-artwork-02",
    number: "02",
    title: "POSTER ARTWORK 02",
    category: "Posters",
    shortDescription: "Creative typographic poster artwork and visual design composition.",
    year: "2025",
    image: "https://i.ibb.co/wN52jHRH/captur-5.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[4/5]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/wN52jHRH/captur-5.png",
        caption: "Creative poster artwork composition"
      }
    ]
  },
  {
    id: "youtube-thumbnail-vol-1",
    number: "01",
    title: "THUMBNAIL 1",
    category: "Thumbnails",
    shortDescription: "High-CTR visual packaging, title composition, and attention-engineered creator thumbnail.",
    year: "2025",
    image: "https://i.ibb.co/sJcvQpZP/Capture.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[16/9]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/sJcvQpZP/Capture.png",
        caption: "High-CTR thumbnail key visual composition"
      },
      {
        url: "https://i.ibb.co/WvFcgVS2/Capture-1.png",
        caption: "Series companion thumbnail design"
      }
    ]
  },
  {
    id: "youtube-thumbnail-vol-2",
    number: "02",
    title: "THUMBNAIL 2",
    category: "Thumbnails",
    shortDescription: "Dynamic storytelling packaging and conversion-driven visual architecture.",
    year: "2025",
    image: "https://i.ibb.co/WvFcgVS2/Capture-1.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[16/9]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/WvFcgVS2/Capture-1.png",
        caption: "Dynamic thumbnail key visual composition"
      },
      {
        url: "https://i.ibb.co/sJcvQpZP/Capture.png",
        caption: "High-CTR companion layout and focal hierarchy"
      }
    ]
  },
  {
    id: "youtube-thumbnail-vol-3",
    number: "03",
    title: "THUMBNAIL 3",
    category: "Thumbnails",
    shortDescription: "High-impact YouTube video packaging and attention-engineered thumbnail.",
    year: "2025",
    image: "https://i.ibb.co/jkWTgZK5/Capture-6.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[16/9]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/jkWTgZK5/Capture-6.png",
        caption: "YouTube thumbnail visual composition"
      }
    ]
  },
  {
    id: "youtube-thumbnail-vol-4",
    number: "04",
    title: "THUMBNAIL 4",
    category: "Thumbnails",
    shortDescription: "High-CTR visual storytelling and attention-engineered creator thumbnail.",
    year: "2025",
    image: "https://i.ibb.co/HpgRL0sk/Capture-5.png",
    cardSize: "tall",
    aspectRatioClass: "aspect-[16/9]",
    objectFit: "contain",
    galleryImages: [
      {
        url: "https://i.ibb.co/HpgRL0sk/Capture-5.png",
        caption: "YouTube thumbnail visual composition"
      }
    ]
  },
  {
    id: "aura-studio",
    number: "05",
    title: "AURA STUDIO",
    category: "UI Design",
    shortDescription: "Minimalist spatial curation app interface for contemporary art galleries.",
    year: "2024",
    client: "Aura Cultural Labs",
    brief: "Design an elegant tablet and mobile application allowing museum visitors to explore exhibition floorplans, artist interviews, and interactive audio tours.",
    process: "Used generous whitespace, hairline borders, and fluid gesture navigation. Every screen is treated like an editorial catalogue page rather than a cluttered software interface.",
    result: "Awarded Mobile Design of the Day on Awwwards and deployed across 6 institutions across Berlin and Vienna.",
    tools: ["Figma", "Design Systems", "Protopie"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    cardSize: "tall",
    aspectRatioClass: "aspect-[4/5]",
    colorPalette: ["#F5F3EE", "#050505", "#E8E5DE", "#F5A623"],
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        caption: "Exhibition walkthrough UI & tactile typography selection"
      },
      {
        url: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1200&auto=format&fit=crop",
        caption: "Design system components, token sheets, and modal flows"
      }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Brand Identity",
    description: "Holistic visual systems from logotypes and typography hierarchies to packaging, color palettes, and complete brand guideline books.",
    deliverables: ["Logomark & Wordmark", "Color & Typography Systems", "Brand Manuals", "Packaging & Print Collateral"],
    tag: "Core Focus"
  },
  {
    number: "02",
    title: "Social Media Design",
    description: "High-impact visual campaigns, editorial carousels, animated motion hooks, and story packages engineered for visual retention.",
    deliverables: ["Instagram Feed Systems", "Motion Reels Graphics", "Carousel Layouts", "Campaign Toolkits"],
    tag: "High Engagement"
  },
  {
    number: "03",
    title: "Poster Design",
    description: "Bold experimental typographic posters, cultural event promotions, limited edition screen prints, and architectural showcases.",
    deliverables: ["Exhibition Posters", "Festival Collateral", "Typography Art", "Large Format Print"],
    tag: "Editorial"
  },
  {
    number: "04",
    title: "YouTube Thumbnails",
    description: "Scientifically tested, high-CTR digital packaging for creators and premium media productions that command instant attention.",
    deliverables: ["High-CTR Thumbnail Suites", "Title Treatment Cards", "Channel Branding", "A/B Testing Variants"],
    tag: "Conversion"
  },
  {
    number: "05",
    title: "Digital Graphics",
    description: "Key visual assets, vector illustrations, editorial banners, marketing collaterals, and digital advertising suites.",
    deliverables: ["Key Visual Suites", "Digital Ad Banners", "Vector Art", "Lookbooks"],
    tag: "Digital"
  },
  {
    number: "06",
    title: "UI Design",
    description: "Minimalist, art-directed user interface layouts, design tokens, and spatial components for modern web and mobile products.",
    deliverables: ["Web & Mobile UI", "Figma Design Systems", "Interactive Prototypes", "Developer Handoff"],
    tag: "Digital Product"
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: "DESIGN SOFTWARE",
    items: [
      { name: "Adobe Photoshop", level: "Expert", note: "Raster manipulation, photo compositing & color grading" },
      { name: "Adobe Illustrator", level: "Expert", note: "Vector systems, logos, typography & iconography" },
      { name: "Figma", level: "Advanced", note: "UI layouts, design systems & collaborative prototyping" }
    ]
  },
  {
    category: "VISUAL DISCIPLINES",
    items: [
      { name: "Typography", level: "Core", note: "Hierarchy, tracking, optical kerning & Swiss grid balance" },
      { name: "Composition", level: "Core", note: "Asymmetry, negative space, golden ratio & visual weight" },
      { name: "Color Theory", level: "Core", note: "Palette chemistry, contrast compliance & print CMYK matching" },
      { name: "Brand Strategy", level: "Core", note: "Positioning, audience moodboards & conceptual narratives" },
      { name: "Print Production", level: "Core", note: "Pre-press, foil stamping, paper stock & spot UV" },
      { name: "Digital Art Direction", level: "Core", note: "Creative direction, styling & campaign conceptualization" }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understanding the Core Intent",
    description: "Unpacking the idea, target audience, brand philosophy, and competitive landscape through focused discovery and strategic inquiry."
  },
  {
    number: "02",
    title: "EXPLORE",
    subtitle: "Research & Visual Directions",
    description: "Collecting unexpected historical and contemporary references, sketching typography treatments, testing chromatic palettes, and defining the mood."
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Building the Concept System",
    description: "Developing the chosen concept with precision — crafting lockups, grid foundations, real-world mockups, and stress-testing across all formats."
  },
  {
    number: "04",
    title: "DELIVER",
    subtitle: "Production & Flawless Handoff",
    description: "Packaging pixel-perfect vector files, press-ready print PDFs, digital asset packages, and clear style guidelines for effortless deployment."
  }
];
