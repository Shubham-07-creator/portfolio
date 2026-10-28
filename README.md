# Shubham Kumar — Developer Portfolio

A recruiter-focused, responsive developer portfolio for **Shubham Kumar** featuring the **Slate Sky Editorial** design system (deep neutral canvas with sky blue accent `#38BDF8` in dark mode and `#0369A1` in light mode). Built with Vite, React, and Tailwind CSS.

## Stack
- **Framework:** React + Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS with CSS Variables design tokens (Dark mode default, Light mode supported)
- **Animations:** Framer Motion (hover, layout, and scroll reveals with reduced motion support)
- **Icons:** React Icons (`Si` set + `FaJava` + `FaLinkedin`) and Lucide React (stroke 1.5)
- **Contact:** EmailJS with automatic mailto fallback
- **Analytics:** @vercel/analytics

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

### Environment Configuration
Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```
Fill in your optional EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
*(If keys are not provided, the contact form opens the user's default email client via mailto.)*

### Development & Build
```bash
# Start local development server
npm run dev

# Run Oxlint checks (0 errors, 0 warnings)
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## Deployment on Vercel
1. Push repository to GitHub.
2. Import repository into Vercel.
3. Framework Preset: **Vite**.
4. Configure environment variables (`VITE_EMAILJS_*` if used).
5. Deploy.

---

## Things to Replace
Customize the portfolio with your personal assets by updating `src/data/portfolio.js` and the `public/` directory:
1. **Screenshots:** Add project screenshots to `public/projects/tradexpert.webp` and `public/projects/stayhub.webp` (or configure `gallery[]` in `src/data/portfolio.js`).
2. **Resume:** Place your resume PDF at `public/Shubham_Kumar_Resume.pdf` and set `identity.resumeUrl = "/Shubham_Kumar_Resume.pdf"`.
3. **LeetCode URL:** Set `identity.leetcodeUrl` in `src/data/portfolio.js` to show the LeetCode profile card.
4. **Third Project:** Uncomment and fill in the third project template in `src/data/portfolio.js` under `projects`.
5. **Profile Photo:** Place a portrait at `public/profile.webp` and set `identity.profileImage = "/profile.webp"` (defaults to the clean "SK" monogram tile).
6. **EmailJS Keys:** Add your EmailJS Service ID, Template ID, and Public Key to `.env`.
