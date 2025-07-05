# Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TailwindCSS, and ShadCN components.

## Features

- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Interactive skill bars with progress animations
- 📊 Animated counters for statistics
- 🎨 Modern gradient designs
- 🔗 Social media integration
- 📧 Contact form ready
- 🚀 Optimized performance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Components**: ShadCN/UI
- **Icons**: Lucide React
- **Animations**: CSS animations + Intersection Observer API
- **Package Manager**: Bun

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Run the development server:
```bash
bun run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
Edit the following in `app/page.tsx`:
- Name and title
- About me description
- Skills and proficiency levels
- Project details
- Work experience
- Contact information

### Styling
- Colors and themes: `app/globals.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.ts`

### Components

#### AnimatedCounter
Displays animated numbers with intersection observer for performance.

#### ProjectCard
Showcases projects with hover effects, tech stack, and links.

#### SkillBar
Interactive skill bars with animated progress and proficiency levels.

## Deployment

The site is ready to deploy on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!
