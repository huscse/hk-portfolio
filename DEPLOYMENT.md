# 🚀 DEPLOYMENT GUIDE - Husnain Khaliq Portfolio

## Quick Start (5 minutes to deploy)

### 1. Set Up Next.js Project

```bash
# Create a new Next.js project
npx create-next-app@latest husnain-portfolio
# Select: TypeScript ✓, Tailwind ✓, App Router ✓

cd husnain-portfolio
```

### 2. Install Dependencies

```bash
npm install lucide-react framer-motion
```

### 3. Copy Project Files

Copy these files to your project:

```
husnain-portfolio/
├── app/
│   ├── page.tsx          (use app-page.tsx)
│   ├── layout.tsx        (use layout.tsx)
│   └── globals.css       (use globals.css)
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

### 4. Run Locally

```bash
npm run dev
```

Visit http://localhost:3000

### 5. Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Or push to GitHub and connect via Vercel dashboard
```

---

## 📝 Customization Checklist

### Essential Updates (MUST DO)

#### 1. Contact Information

**File:** `app/page.tsx`

```tsx
// Line ~300 - Navigation email
href="mailto:YOUR_EMAIL@example.com"

// Line ~700+ - Contact section
href="mailto:YOUR_EMAIL@example.com"

// Line ~750+ - Social links
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_USERNAME">
```

#### 2. Projects

**File:** `app/page.tsx` (around line 40)

```tsx
const projects = [
  {
    name: "Your Project Name",
    tagline: "One-line description",
    description: "Full description of what the project does and why it matters",
    impact: [
      "Specific achievement or metric",
      "Another achievement"
    ],
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/your-username/repo",
    live: "https://your-demo.com", // or null if no live demo
    icon: Brain // Choose from: Brain, Sparkles, Terminal, Code2, Database
  },
  // Add 2-4 projects total
];
```

**Available Icons:**
- `Brain` - AI/ML projects
- `Sparkles` - Creative/innovative projects
- `Terminal` - Backend/systems projects
- `Code2` - Frontend/web projects
- `Database` - Data-heavy projects

#### 3. Skills

**File:** `app/page.tsx` (around line 90)

```tsx
const skills = {
  "Your Category": ["Skill1", "Skill2", "Skill3"],
  "Frontend": ["Next.js", "React", "Your Skills"],
  "Backend": ["Node.js", "Your Stack"],
  // Customize all categories
};
```

#### 4. About Section

**File:** `app/page.tsx` (around line 340-370)

Replace the entire about section text with your story. Keep it:
- Personal but professional
- 3-4 paragraphs
- Focus on what you build, not what you "want to learn"
- Mention specific technologies
- End with your availability

#### 5. Experience

**File:** `app/page.tsx` (around line 650)

Update the experience cards with your actual experience:

```tsx
<div className="glass-effect p-6 rounded-xl border-l-4 border-blue-500">
  <h4 className="font-bold text-xl mb-2">Your Role</h4>
  <p className="text-blue-400 mb-3 font-medium">Company/Organization</p>
  <ul className="space-y-2 text-gray-300">
    <li className="flex items-start">
      <span className="text-blue-400 mr-2">▹</span>
      Your achievement
    </li>
  </ul>
</div>
```

#### 6. Resume PDF

Add your resume to the public folder:

```
public/
  resume.pdf
```

The download link will work automatically.

### Optional Enhancements

#### Add Project Screenshots

1. Create a `public/projects/` folder
2. Add images: `project1.png`, `project2.png`, etc.
3. Update project cards:

```tsx
<div className="mb-6">
  <img 
    src="/projects/navis.png" 
    alt="Navis preview"
    className="w-full rounded-lg"
  />
</div>
```

#### Change Color Scheme

**Primary Color** (currently blue):

Search and replace in `app/page.tsx`:
- `blue-400` → `purple-400` (or your color)
- `blue-500` → `purple-500`
- `blue-950` → `purple-950`

**Gradient Accent**:

```tsx
// Line ~355 - Hero gradient text
<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
// Change to your preferred colors
```

#### Add Animations with Framer Motion

The site is ready for Framer Motion but uses CSS animations by default for simplicity.

To add Framer Motion:

```tsx
import { motion } from 'framer-motion';

// Replace divs with motion.div
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### Mobile Menu

Add a hamburger menu for mobile:

```tsx
// In navigation section
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Add button (only visible on mobile)
<button 
  className="md:hidden"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  <Menu />
</button>
```

---

## 🎨 Design Customization

### Typography

Current fonts:
- **Display:** Syne (headings)
- **Mono:** JetBrains Mono (code/tags)
- **Body:** Inter (text)

To change fonts, update the Google Fonts import in `app/page.tsx`:

```tsx
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap');
```

Then update the CSS classes.

### Background Effects

The current background uses radial gradients. To modify:

```css
.gradient-bg {
  background: radial-gradient(
    ellipse at top, 
    rgba(59, 130, 246, 0.15) 0%, 
    transparent 50%
  );
}
```

Change the RGB values and positions to customize.

### Spacing

Adjust section padding:

```tsx
// Current: py-32 (8rem)
// Options: py-24 (6rem), py-40 (10rem)
className="py-32"
```

---

## 🔍 SEO Optimization

### Update Metadata

**File:** `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your custom description',
  keywords: ['Your', 'Keywords'],
  // ... update all fields
}
```

### Add Open Graph Image

1. Create `public/og-image.png` (1200x630px)
2. Update metadata:

```tsx
openGraph: {
  images: ['/og-image.png'],
}
```

### Add Analytics

For Google Analytics, add to `app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

---

## 🐛 Troubleshooting

### Build Errors

**"Module not found: Can't resolve 'lucide-react'"**
```bash
npm install lucide-react
```

**"Property 'icon' does not exist"**

Make sure you're importing all icons:
```tsx
import { Github, Mail, Brain, Terminal, Sparkles, Code2 } from 'lucide-react';
```

### Styling Issues

**Fonts not loading:**

Check the Google Fonts URL is correct in the `<style>` tag.

**Tailwind classes not working:**

Verify `tailwind.config.js` content array includes your files:
```js
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### Deployment Issues

**Static export error:**

Ensure `next.config.js` has:
```js
output: 'export',
```

**Images not loading on Vercel:**

Use relative paths: `/image.png` not `./image.png`

---

## 📊 Performance Tips

1. **Optimize Images:** Use WebP format, max 1920px width
2. **Lazy Load:** Sections below fold load automatically
3. **Font Loading:** Google Fonts has `display=swap` for better performance
4. **Bundle Size:** Keep dependencies minimal

---

## 🔐 Security

- All external links use `rel="noopener noreferrer"`
- No API keys in client-side code
- No localStorage/sessionStorage (not needed)

---

## 📞 Support

For questions or issues:
1. Check this guide first
2. Review Next.js documentation
3. Check Tailwind CSS docs
4. Review the code comments

---

## ✅ Pre-Launch Checklist

- [ ] Updated all email addresses
- [ ] Added real GitHub/LinkedIn links
- [ ] Customized all 3 projects
- [ ] Updated skills section
- [ ] Wrote personal about section
- [ ] Updated experience cards
- [ ] Added resume.pdf to public folder
- [ ] Tested on mobile
- [ ] Tested all navigation links
- [ ] Tested all external links
- [ ] Verified smooth scrolling works
- [ ] Checked for typos
- [ ] Tested in multiple browsers
- [ ] Optimized images
- [ ] Set up custom domain (optional)
- [ ] Added Google Analytics (optional)

---

Built with Next.js 14, TypeScript, Tailwind CSS, and Lucide Icons.

**Ready to ship!** 🚀