import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dev Jashani — Java Full Stack Developer Portfolio",
    short_name: "Dev Jashani",
    description:
      "Dev Jashani is a Java Full Stack Developer crafting scalable systems with Spring Boot and React. Explore enterprise microservices, projects, and architecture.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
