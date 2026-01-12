# Husnain Khaliq - Portfolio Website

A modern, production-ready portfolio showcasing full-stack engineering and AI expertise.

## 🎨 Design Features

- **Premium Dark Theme** - Sophisticated dark mode with subtle gradients and glass morphism
- **Custom Typography** - Syne display font + JetBrains Mono for a distinctive look
- **Smooth Animations** - Carefully crafted entrance animations and micro-interactions
- **Responsive Design** - Flawless experience across all devices
- **Performance Optimized** - Fast load times and smooth scrolling

## 🚀 Quick Start

### Option 1: Deploy to Vercel (Recommended)

1. Create a new Next.js project:

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir
cd portfolio
```

2. Install dependencies:

```bash
npm install framer-motion lucide-react
```

3. Replace `app/page.tsx` with the provided React component (convert to TypeScript if needed)

4. Update `tailwind.config.js` to extend the theme:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

5. Deploy to Vercel:

```bash
vercel
```

### Option 2: Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Customization Guide

### Update Personal Information

Edit these sections in the component:

#### Contact Information

```jsx
// Line ~300 - Update email
href="mailto:your-email@example.com"

// Line ~700+ - Social links
<a href="https://github.com/your-username">
<a href="https://linkedin.com/in/your-username">
```

#### Projects

Update the `projects` array (around line 35):

```jsx
const projects = [
  {
    name: 'Your Project',
    tagline: 'One-line description',
    description: 'Detailed description...',
    impact: ['Achievement 1', 'Achievement 2'],
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    live: 'https://...', // or null
    icon: Brain, // Import from lucide-react
  },
];
```

#### Skills

Update the `skills` object (around line 90):

```jsx
const skills = {
  Category: ['Skill1', 'Skill2'],
  // Add or modify categories
};
```

#### About Section

Edit the about text (around line 330):

```jsx
<p>Your custom bio...</p>
```

### Color Scheme

The site uses a blue-purple gradient theme. To change colors:

1. **Primary Color** - Search for `blue-400`, `blue-500`, etc. and replace with your preferred color
2. **Accent Color** - Update gradient values in `bg-gradient-to-r from-blue-400`
3. **Background** - Change `bg-[#0a0a0f]` to your preferred dark background

### Add Resume PDF

Place your resume PDF in the `public` folder:

```
public/
  resume.pdf
```

The download link will automatically work:

```jsx
<a href="/resume.pdf" download>
```

## 🎯 Key Sections

1. **Hero** - Attention-grabbing headline with availability status
2. **About** - Personal story and technical narrative
3. **Projects** - Featured work with technical details and impact
4. **Experience** - Skills breakdown and work history
5. **Contact** - Multiple ways to connect

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS animations + Framer Motion ready
- **Icons**: Lucide React
- **Fonts**: Syne (display), JetBrains Mono (code), Inter (body)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

## ⚡️ Performance Tips

1. **Image Optimization** - Use Next.js `<Image>` component for project screenshots
2. **Lazy Loading** - Consider lazy loading for below-fold content
3. **Font Optimization** - Fonts are loaded from Google Fonts CDN
4. **Code Splitting** - Next.js handles this automatically

## 🎨 Design Philosophy

This portfolio avoids generic "student portfolio" aesthetics by:

- Using distinctive typography (Syne instead of Inter/Roboto)
- Implementing subtle, professional animations
- Focusing on engineering achievements over buzzwords
- Maintaining generous white space and breathing room
- Using a cohesive blue-purple gradient theme

## 🔧 Troubleshooting

### Fonts not loading

Ensure Google Fonts link is in the `<style>` tag:

```jsx
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&...');
```

### Smooth scroll not working

Check that section IDs match navigation links:

```jsx
<section id="home"> // Must match scrollToSection('home')
```

### Animations not appearing

Ensure the fade-in classes are applied and the CSS animations are defined in the `<style>` tag.

## 📄 License

This portfolio template is free to use for personal purposes. Please customize it to reflect your own work and personality.

---

**Built with Next.js, Tailwind CSS, and attention to detail.**# hk-portfolio
