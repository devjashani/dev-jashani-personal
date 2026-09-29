import { siteContent } from "@/content/site";

export function generateJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteContent.meta.url || "https://devjashani.com";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Dev Jashani",
        jobTitle: "Java Full Stack Developer",
        description: siteContent.meta.description,
        url: siteUrl,
        image: `${siteUrl}/assets/hero/statue-circuit.png`,
        email: "devjashani2004@gmail.com",
        nationality: {
          "@type": "Country",
          name: "India"
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "India"
        },
        sameAs: [
          "https://github.com/devjashani",
          "https://linkedin.com/in/dev-jashani",
          "https://twitter.com/ig_Dev_",
          "https://www.instagram.com/dev_jashani/",
          "https://leetcode.com/devjashani",
          "https://www.hackerrank.com/profile/devjashani40"
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "B.Tech Computer Science and Engineering"
        },
        knowsAbout: [
          "Java",
          "Spring Boot",
          "React",
          "PostgreSQL",
          "Microservices",
          "Kotlin"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Dev Jashani — Java Full Stack Developer | Portfolio",
        description: siteContent.meta.description,
        publisher: {
          "@id": `${siteUrl}/#person`
        },
        inLanguage: "en-US"
      }
    ]
  };
}

