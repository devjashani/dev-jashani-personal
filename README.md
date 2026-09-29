# DEV JASHANI — Java Full Stack Developer
### 2035 Specification // Human × Machine — Marble & Circuit Portfolio

A cinematic, HUD-inspired personal portfolio website for **Dev Jashani**, a Java Full Stack Developer from India specializing in scalable enterprise backend systems, Spring Boot microservices, React, and PostgreSQL.

Designed with a futuristic 2035 aesthetic: dark atmosphere (`#0A0A0B`), HUD corner brackets, live IST telemetry widgets, gold circle accents, monochrome halftone shaders, and smooth kinetic motion—built for speed, technical SEO, and accessibility.

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, Server-Side Pre-rendered)
- **Language**: TypeScript (Strict typing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens (`--ink`, `--graphite`, `--line`, `--bone`, `--mute`, `--gold`, `--ember`)
- **Typography**: `Anton` (Display headlines), `Cormorant Garamond` (Serif editorial accents), `Manrope` (Body text), `JetBrains Mono` (HUD labels) via `next/font`
- **Motion & Scrolling**:
  - `motion/react` (Framer Motion) for line reveals, state transitions, and spring animations
  - `lenis` for smooth inertial scrolling synced with GSAP ScrollTrigger
  - `gsap` + `ScrollTrigger` for scroll-driven animations and pinning
- **3D & Shaders**:
  - `@react-three/fiber` & `@react-three/drei` (Three.js WebGL canvas)
  - Custom procedural halftone/dither GLSL shader with cursor tracking and fingertip spark convergence
  - Graceful static fallback for mobile devices, low-power mode, and `prefers-reduced-motion`
- **Icons**: `lucide-react`
- **SEO & Structured Data**: Dynamic Open Graph generation (`next/og`), XML Sitemap (`sitemap.ts`), Robots (`robots.ts`), Web App Manifest (`manifest.ts`), and Schema.org JSON-LD (`Person` and `WebSite` entities)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `20.x` or higher
- npm `10.x` or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/devjashani/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure `NEXT_PUBLIC_SITE_URL` in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://devjashani.com
```

### Development Server

Start the Next.js local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the assigned port) to view the site.

### Production Build & Linting

```bash
# Run ESLint validation
npm run lint

# Compile optimized static production build
npm run build

# Preview production build locally
npm run start
# or on a custom port
npm run start -- -p 3001
```

---

## 📝 Editing Site Content

All text, links, projects, and personal data are centralized in a single typed configuration file:
👉 **[`src/content/site.ts`](src/content/site.ts)**

TypeScript types governing this file are located in **[`src/types/content.ts`](src/types/content.ts)**.

### Content Structure Overview

| Key | Description |
| :--- | :--- |
| `meta` | SEO title, 150–160 char meta description, keywords, author, and base canonical URL. |
| `personal` | Name, title, coordinates, location, status badge, email, phone, and resume path. |
| `hero` | Section tagline, rotating text ticker lines, manifesto headline, and CTAs. |
| `about` | Main bio narrative, learning velocity tags, philosophy quote, and bust visual path. |
| `projects` | Featured projects (`NexusHR`, `FitXTrack`) with bullet points, tech tags, GitHub URLs, and optional `liveUrl`. |
| `stack` | Categorized tech stack (Languages, Backend, Frontend, Databases, Tools) and marquee skills. |
| `experience` | Industry tenure details (Zidio Development), role, dates, description, and bullet deliverables. |
| `credentials` | LeetCode/HackerRank metrics, CodeSignal & Udemy certifications, and hackathon leadership. |
| `contact` | Direct transmission terminal, email copy action, and connected social channels. |

> **Tip**: To add a "Live Demo" button to any project, simply provide a `liveUrl` attribute in the project item inside `src/content/site.ts`. If omitted, the button automatically remains hidden.

---

## 🖼️ Static Assets Directory

All static media should be placed inside the **`/public`** directory:

```
public/
├── Dev-Jashani-Resume.pdf          # Official resume PDF (downloadable & viewable)
├── favicon.ico                     # Browser tab favicon
├── assets/
│   ├── hero-hands.png              # 16:9 Halftone hands (human + robot reaching)
│   ├── hero/
│   │   └── statue-circuit.png      # Antique Parian bust merged with circuitry
│   └── projects/
│       ├── nexushr-preview.png     # NexusHR Enterprise HR system mockup (16:9)
│       └── fitxtrack-preview.png   # FitXTrack Kotlin Compose app mockup (16:9)
```

---

## ☁️ Deployment on Vercel

This repository is optimized for one-click deployment on **[Vercel](https://vercel.com/)**:

1. Push your repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Keep the default build settings:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
4. Add the **Environment Variable**:
   - `NEXT_PUBLIC_SITE_URL` = `https://devjashani.com` (or your custom domain)
5. Click **"Deploy"**.

Vercel will automatically build the static pages, compile the `@vercel/og` Open Graph image, generate the `sitemap.xml`, and configure edge caching.

---

## 🛡️ License

Copyright © 2026 Dev Jashani. All rights reserved.
