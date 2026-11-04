# Shubham Kumar — Developer Portfolio

A responsive developer portfolio for **Shubham Kumar** (Full Stack Developer · MERN + Java) built with Vite, React 19, and Tailwind CSS v4 using the "Slate Sky" design token system.

- **Production URL:** [https://shubham-07-creator.github.io/portfolio/](https://shubham-07-creator.github.io/portfolio/)
- **GitHub:** [https://github.com/Shubham-07-creator](https://github.com/Shubham-07-creator)
- **LinkedIn:** [https://www.linkedin.com/in/shubhamkumardev](https://www.linkedin.com/in/shubhamkumardev)

---

## Technical Stack & Dependencies

The versions below are defined in [`package.json`](file:///package.json):

| Package | Version | Purpose |
| :--- | :--- | :--- |
| **react** | `^19.2.8` | Core UI library |
| **react-dom** | `^19.2.8` | React DOM renderer |
| **react-router-dom** | `^7.18.4` | Client-side routing with `BrowserRouter` |
| **tailwindcss** | `^4.3.3` | Utility-first styling with CSS variables |
| **@tailwindcss/vite** | `^4.3.3` | Vite plugin for Tailwind CSS v4 |
| **vite** | `^8.3.0` | Development server and build bundler |
| **framer-motion** | `^14.0.0` | UI animations with reduced motion support |
| **lucide-react** | `^1.52.0` | SVG icons |
| **react-icons** | `^5.7.0` | Brand and technology icons (`Si`, `Fa`) |
| **@emailjs/browser** | `^5.0.2` | Contact form delivery with mailto fallback |
| **@vercel/analytics** | `^2.0.1` | Web analytics |
| **oxlint** | `^1.81.0` | Code linter |

---

## Design System: Slate Sky Tokens

The design uses a neutral base palette with a single sky blue accent token:

- **Dark Theme (Default):**
  - Background: `--bg: #0B1220`
  - Surface: `--surface: #111B2E`
  - Secondary Surface: `--surface-2: #16223A`
  - Border: `--border: #1E2B42`
  - Accent: `--accent: #38BDF8`
  - Text: `--text-heading: #EEF3FA`, `--text-body: #CFD8E6`, `--text-muted: #9AA9C0`
- **Light Theme:**
  - Background: `--bg: #F8FAFC`
  - Surface: `--surface: #FFFFFF`
  - Secondary Surface: `--surface-2: #EEF2F7`
  - Border: `--border: #E1E7F0`
  - Accent: `--accent: #0274B6`
  - Text: `--text-heading: #0F172A`, `--text-body: #2A3650`, `--text-muted: #52627A`
- **Typography:**
  - Headings: `Instrument Serif`, Georgia, serif
  - Body & UI: `Inter`, system-ui, sans-serif
  - Code & Metadata: `JetBrains Mono`, monospace

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
git clone https://github.com/Shubham-07-creator/Portfolio.git
cd Portfolio
npm install
```

### Development Server
```bash
npm run dev
```

### Linting
```bash
npm run lint
```

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## Deployment

### GitHub Pages
1. Pushes to `main` trigger `.github/workflows/deploy.yml`.
2. Vite builds using `base: '/portfolio/'`.
3. SPA fallback: `dist/404.html` is automatically copied from `dist/index.html` during the build so `/projects/:slug` works on refresh.

### Vercel
1. Framework Preset: **Vite**.
2. Root directory: `./`.
3. Build command: `npm run build`.
4. Output directory: `dist`.

---

## Configuration & Asset Slots

All customizable fields are located in [`src/data/portfolio.js`](file:///src/data/portfolio.js):

1. **Resume:** Set `identity.resumeUrl = "/Shubham_Kumar_Resume.pdf"` (or URL) to render Resume buttons in the navbar, hero, command palette, and recruiter drawer. When empty (`""`), all resume buttons remain hidden.
2. **LeetCode:** Set `identity.leetcodeUrl` to show LeetCode links in Contact, Footer, Command Palette, and About.
3. **Project Screenshots:** When real screenshots are available in `public/projects/`, uncomment the corresponding entries in `projects[].gallery` in `src/data/portfolio.js`. When empty, a neutral wireframe skeleton is rendered.
4. **Third Project:** A commented-out template is available under `projects[]` in `src/data/portfolio.js`.
5. **Contact Form:** Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in `.env`. If unconfigured, the form falls back to opening the visitor's mail client.
