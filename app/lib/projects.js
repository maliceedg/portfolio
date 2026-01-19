export const projects = [
  {
    id: "pixel",
    bg: "bg-orange-200",
    name: "PixelUniverse+",
    logo: "/pixel/logo.webp",
    description:
      "PixelUniverse+ is a marketing-focused web platform built to deliver visually rich, conversion-oriented landing experiences. The project combined modern UI patterns with solid performance foundations, serving as a reliable digital presence during a critical growth period for the business.",
    url: "https://pixeluniverseplus.com",
    images: [
      {
        imageUrl: "/pixel/hero.webp",
        alt: "Hero section showcasing the main value proposition",
      },
      {
        imageUrl: "/pixel/boxes.webp",
        alt: "Feature-driven content sections with modular layout blocks",
      },
      {
        imageUrl: "/pixel/metrics.webp",
        alt: "Metrics and value-focused content section",
      },
      {
        imageUrl: "/pixel/section.webp",
        alt: "Informational section highlighting platform capabilities",
      },
    ],
    caseStudy: {
      roleMeta: "Frontend Engineer · Marketing Platform · 2020–2021",
      stack: ["WordPress", "UI/UX", "Performance Optimization", "SEO"],
      sections: {
        context:
          "PixelUniverse+ is a digital platform designed to support marketing-driven products through visually engaging and structured landing experiences. The project was developed during the COVID-19 pandemic, when having a clear, trustworthy online presence became essential for business continuity and growth.",
        challenge:
          "The primary challenge was delivering a modern, visually rich interface without compromising performance or accessibility. The site needed to feel polished and dynamic while remaining fast, stable, and easy to maintain on a WordPress-based stack.",
        decisions: [
          "Developed a fully custom WordPress theme instead of relying on pre-built templates.",
          "Prioritized clarity, layout hierarchy, and perceived performance over excessive visual effects.",
          "Optimized assets and limited heavy visuals above the fold to improve initial load times.",
        ],
        implementation:
          "The site was implemented as a custom WordPress theme with reusable layout sections and carefully structured components. Performance best practices were applied across asset loading, layout composition, and responsive behavior to ensure consistency across devices.",
        outcome:
          "The platform successfully served as the company’s main digital presence for an extended period without major issues. The client later returned to request a visual refresh and platform update, validating the initial architectural decisions and opening the door for PixelUniverse+ v2.",
      },
    },
  },
  {
    id: "success",
    bg: "bg-slate-200",
    name: "SuCCESS",
    logo: "/success/logo.png",
    description:
      "A multi-role platform for criminology education and academic networking—combining a public-facing landing experience with an authenticated product for researchers and institutions.",
    url: "https://criminology.fpce.up.pt",
    images: [
      {
        imageUrl: "/success/hero.png",
        alt: "Landing hero and value proposition",
      },
      { imageUrl: "/success/auth.png", alt: "Login and registration flows" },
      { imageUrl: "/success/dashboard.png", alt: "Admin dashboard overview" },
      {
        imageUrl: "/success/home.png",
        alt: "User home and content feed",
      },
      {
        imageUrl: "/success/article.png",
        alt: "Article view and content details",
      },
    ],
    caseStudy: {
      roleMeta:
        "Frontend Engineer (2nd dev) · Landing + Web Platform + Admin Dashboard · 2022",
      stack: [
        "Frontend Development",
        "Landing Layouts",
        "Admin Dashboard UI",
        "Documentation",
        "UX Implementation",
      ],
      sections: {
        context:
          "SuCCESS is a web application designed to help students and researchers stay connected to their field through profiles, groups, publications, and a content-driven home experience. It supports both individual users and institutions/programs, with registration flows for each role.",
        challenge:
          "Deliver a consistent UI across a public landing and a feature-heavy authenticated experience, while supporting multiple user types and a separate administrator back office with reporting, filtering, and content management.",
        decisions: [
          "Built landing and dashboard layouts with a reusable UI approach to keep sections consistent and easy to extend.",
          "Kept navigation predictable across the platform to reduce learning curve for non-technical users.",
          "Documented key workflows end-to-end so onboarding and support would not depend on the engineering team.",
        ],
        implementation:
          "I worked as the second frontend developer, implementing most of the landing page layouts and the admin dashboard UI. In parallel, I produced the platform manuals for end users, administrators, and client stakeholders—covering core flows like authentication, profile management, publications, groups, and admin reporting/export.",
        outcome:
          "The team delivered a stable platform experience for both users and administrators, supported by comprehensive manuals that made training and adoption significantly easier for non-technical audiences.",
      },
    },
  },
  {
    id: "hiscore",
    bg: "bg-slate-200",
    name: "HiScore Labs",
    logo: "/hiscore/logo.png", // adjust
    description:
      "A marketing website for a game art outsourcing studio — designed to communicate a broad production offering with clarity, credibility, and a conversion-first structure.",
    url: "https://hiscorelabs.com/",
    images: [
      // add screenshots you can legally share
      // { imageUrl: "/hiscore/hero.webp", alt: "Homepage hero and positioning" },
    ],
    caseStudy: {
      roleMeta: "Frontend Engineer · Marketing Website · 2025", // replace
      stack: ["WordPress", "Performance Optimization", "SEO", "Marketing"], // replace with your real stack
      sections: {
        context:
          "HiScore Labs is a game art outsourcing studio delivering end-to-end production services — from 2D/3D art and concept development to UI/UX, marketing art, and animation. The website’s goal is to present the service range clearly while positioning the studio as a production-ready partner rather than a generic vendor.",
        challenge:
          "Communicate a wide portfolio of services without overwhelming the user, maintain a premium feel with art-heavy content, and structure the experience around trust signals and clear calls to action for lead generation.",
        decisions: [
          "Organized the offering into scannable service categories to reduce cognitive load and improve discovery.",
          "Used a differentiators section to reinforce positioning (pipeline integration, scalable engagements, delivery standards).",
          "Designed the page flow around conversion: repeated CTAs, clear section hierarchy, and credibility elements such as testimonials.",
        ],
        implementation:
          "Implemented the page as a performance-conscious marketing build: reusable sections, consistent typography/spacing, responsive layouts, and SEO-friendly structure to support discoverability and lead capture.",
        outcome:
          "Delivered a clearer narrative for the studio’s value proposition, improved the scan-ability of the service offering, and created a stronger conversion path through consistent calls to action and credibility cues.",
      },
    },
  },
];
