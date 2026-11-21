# Sabarinathan V · Portfolio

Personal portfolio of Sabarinathan V, Full Stack Developer.
Built with React 19, Vite, Tailwind CSS v4, Framer Motion and AOS.

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Sections

| Section | File |
| --- | --- |
| Preloader (water-fill logo + shutter reveal) | `src/components/Preloader.jsx` |
| Navbar | `src/components/Navbar.jsx` |
| Hero with Play Reel video | `src/components/Hero.jsx` |
| About (hanging ID badge) | `src/components/About.jsx` |
| What I Build (SaaS, e-commerce, GST billing…) | `src/components/Solutions.jsx` |
| How I work (scroll-drawn timeline) | `src/components/Expertise.jsx` |
| Tools of the Trade | `src/components/Skills.jsx` |
| Featured Projects | `src/components/Projects.jsx` |
| Certifications | `src/components/Certifications.jsx` |
| Contact form (Web3Forms) | `src/components/Contact.jsx` |
| Footer | `src/components/Footer.jsx` |

## Hero video

The reel lives in `src/assets/hero video/` as `hero.mp4`, `hero.webm` and `hero-poster.webp`.
See `docs/hero-reel-prompts.md` for the generation prompts, the script and the export commands.
The hero adapts automatically to portrait or 16:9 video.
