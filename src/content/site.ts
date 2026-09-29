import { SiteContent } from "@/types/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devjashani.com";

export const siteContent: SiteContent = {
  meta: {
    title: "Dev Jashani — Java Full Stack Developer | Portfolio",
    description:
      "Dev Jashani is a Java Full Stack Developer crafting scalable systems with Spring Boot and React. Explore enterprise microservices, projects, and architecture.",
    url: siteUrl,
    author: "Dev Jashani",
    keywords: [
      "Dev Jashani",
      "Dev Jashani Portfolio",
      "Java Full Stack Developer",
      "Spring Boot Developer",
      "Backend Engineer India",
      "NexusHR",
      "FitXTrack",
      "Microservices",
      "React Developer",
      "PostgreSQL",
      "Software Development Engineer"
    ]
  },
  personal: {
    name: "Dev Jashani",
    role: "Java Full Stack Developer",
    location: "India",
    statusBadge: "Open to SDE / Backend / Full Stack roles — 2026",
    resumeUrl: "/Dev-Jashani-Resume.pdf",
    email: "devjashani2004@gmail.com",
    phone: "+91 6377408157",
    coordinates: "20.5937° N, 78.9629° E"
  },
  hero: {
    tagline: "HUMAN × MACHINE // ARCHITECTURE 2035",
    rotatingLines: [
      "Building reliable backend systems.",
      "Spring Boot | React | PostgreSQL",
      "Clean architecture. Scalable solutions."
    ],
    headlinePrefix: "ENGINEERING",
    headlineHighlight: "SYSTEMS",
    headlineSuffix: "THAT LAST.",
    ctaPrimary: {
      text: "Explore Projects",
      href: "#projects"
    },
    ctaSecondary: {
      text: "Get in Touch",
      href: "#contact"
    }
  },
  about: {
    sectionNumber: "01",
    sectionTitle: "About",
    bioParagraph:
      "Dev Jashani is a B.Tech CSE graduate focused on Java Full Stack development. He enjoys building scalable, production-ready enterprise applications with Spring Boot and continuously improving his understanding of real-world backend systems. Currently learning Microservices Architecture, System Design and Docker, while sharpening problem-solving through Data Structures & Algorithms. Goal: write clean code, build reliable software, and grow into a software engineer who creates systems that last.",
    learningFocus: [
      "Microservices Architecture",
      "System Design & Scalability",
      "Docker & Containerization",
      "Data Structures & Algorithms"
    ],
    philosophyQuote: {
      regular: "Bridging mechanical discipline with human purpose —",
      italic: "marble forged in circuitry.",
      author: "DEV JASHANI // ARCHITECTURAL INTENT"
    },
    image: "/assets/hero/statue-circuit.png"
  },
  projects: {
    sectionNumber: "02",
    sectionTitle: "Selected Works",
    items: [
      {
        id: "nexushr",
        number: "01",
        title: "NexusHR",
        subtitle: "Enterprise HR Management System",
        tags: ["Java 21", "Spring Boot", "React", "PostgreSQL", "JWT"],
        points: [
          "Architected 6 microservices with a Maven multi-module structure.",
          "JWT authentication + Role-Based Access Control across 10+ REST APIs.",
          "Relational schema for employee, attendance and payroll data."
        ],
        repoUrl: "https://github.com/devjashani/NexusHR",
        image: "/assets/projects/nexushr-preview.png"
      },
      {
        id: "fitxtrack",
        number: "02",
        title: "FitXTrack",
        subtitle: "Fitness Tracking Android App",
        tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
        points: [
          "5+ modules with Jetpack Compose and MVVM architecture.",
          "Authentication, workout tracking, weekly planning.",
          "Firebase Auth + Firestore real-time sync."
        ],
        repoUrl: "https://github.com/devjashani/FitXTrack",
        image: "/assets/projects/fitxtrack-preview.png"
      }
    ]
  },
  stack: {
    sectionNumber: "03",
    sectionTitle: "Technical Stack",
    categories: [
      {
        title: "Languages",
        key: "lang",
        skills: ["Java", "JavaScript", "Kotlin", "C++"]
      },
      {
        title: "Backend",
        key: "backend",
        skills: [
          "Spring Boot",
          "Hibernate",
          "Maven",
          "REST APIs",
          "JWT",
          "Spring Security",
          "Postman"
        ]
      },
      {
        title: "Frontend",
        key: "frontend",
        skills: ["React", "HTML", "CSS", "Jetpack Compose"]
      },
      {
        title: "Databases",
        key: "databases",
        skills: ["PostgreSQL", "MySQL", "Firebase Firestore"]
      },
      {
        title: "Tools & Ecosystem",
        key: "tools",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "IntelliJ IDEA",
          "VS Code",
          "Android Studio"
        ]
      }
    ]
  },
  experience: {
    sectionNumber: "04",
    sectionTitle: "Experience",
    items: [
      {
        role: "Java Full Stack Developer Intern",
        company: "Zidio Development",
        period: "March 2026 – June 2026",
        description:
          "Developed 6 Spring Boot microservices using Java 21, Maven, PostgreSQL and REST APIs for an enterprise HR Management System. Implemented JWT authentication, Spring Security and RBAC across 10+ REST APIs with React.js.",
        bullets: [
          "Engineered 6 distinct Spring Boot microservices within a Maven multi-module architecture.",
          "Implemented robust JWT token lifecycle, Spring Security filter chains, and RBAC authorization.",
          "Connected enterprise REST endpoints to a responsive React.js interface with real-time state management."
        ],
        tech: ["Java 21", "Spring Boot", "Maven", "PostgreSQL", "JWT", "Spring Security", "React.js"]
      }
    ]
  },
  credentials: {
    sectionNumber: "05",
    sectionTitle: "Achievements & Credentials",
    achievements: [
      {
        title: "Team Leader — Team Easy",
        event: "Intra College Hackathon 2024",
        badge: "LEADERSHIP"
      },
      {
        title: "Co-Leader — Team R V Qualified",
        event: "Smart India Hackathon 2023",
        badge: "NATIONAL"
      },
      {
        title: "Finance Educator & Content Creator",
        event: "Instagram Community",
        badge: "COMMUNICATION"
      }
    ],
    certifications: [
      {
        name: "Spring Boot REST API with Java & Gradle",
        issuer: "CodeSignal",
        period: "Jul–Aug 2026"
      },
      {
        name: "Android App Development",
        issuer: "Udemy",
        period: "Dec 2025"
      }
    ],
    codingProfiles: [
      {
        platform: "LeetCode",
        stats: "190+ DSA Problems Solved",
        url: "https://leetcode.com/devjashani",
        iconName: "Code2"
      },
      {
        platform: "HackerRank",
        stats: "120+ MySQL Problems Solved",
        url: "https://www.hackerrank.com/profile/devjashani40",
        iconName: "Database"
      }
    ]
  },
  contact: {
    sectionNumber: "06",
    sectionTitle: "Initiate Transmission",
    headlineRegular: "LET'S BUILD",
    headlineItalic: "exceptional systems",
    subtext:
      "Open to SDE, Backend, and Full Stack software engineering roles for 2026. Reach out directly or dispatch a transmission.",
    socials: [
      {
        label: "GitHub",
        url: "https://github.com/devjashani",
        username: "@devjashani"
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/dev-jashani",
        username: "dev-jashani"
      },
      {
        label: "X / Twitter",
        url: "https://twitter.com/ig_Dev_",
        username: "@ig_Dev_"
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/dev_jashani/",
        username: "@dev_jashani"
      }
    ]
  }
};
