'use client';

import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Terminal,
  Database,
  Brain,
  Code2,
  Sparkles,
} from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: 'Navis',
      tagline: 'AI Dataset Navigator',
      description:
        'Multimodal search platform for large-scale autonomous driving datasets using vision-language models and vector embeddings.',
      impact: [
        'Led 7-person cross-functional team through full development cycle',
        'Implemented CLIP, BLIP, and Qwen2-VL embeddings with FAISS vector search',
      ],
      tech: [
        'Next.js',
        'FastAPI',
        'FAISS',
        'CLIP/BLIP',
        'Qwen2-VL',
        'PostgreSQL',
      ],
      github: 'https://github.com/huscse/vlm-dataset-navigator',
      live: null,
      icon: Brain,
    },
    {
      name: 'PromptWise',
      tagline: 'AI Flashcard Generator',
      description:
        'Full-stack SaaS platform that generates intelligent flashcards from any content using GPT-4, with payment integration.',
      impact: [
        'Built end-to-end product with authentication, payments, and AI generation',
        'Integrated Stripe for subscription management and Firebase for real-time sync',
      ],
      tech: ['Next.js', 'OpenAI API', 'Stripe', 'Firebase', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Sparkles,
    },
    {
      name: 'Fitnology',
      tagline: 'AI-Powered Fitness Platform',
      description:
        'Intelligent fitness tracking and recommendation system with personalized workout generation and progress analytics.',
      impact: [
        'Designed product strategy focusing on user retention and engagement',
        'Built responsive UI with strong emphasis on UX and accessibility',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Tailwind'],
      github: 'https://github.com',
      live: null,
      icon: Terminal,
    },
  ];

  const skills = {
    Frontend: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    Backend: ['FastAPI', 'Node.js', 'Express', 'REST APIs'],
    'AI/ML': [
      'OpenAI API',
      'CLIP/BLIP',
      'Vector Embeddings',
      'FAISS',
      'Qwen2-VL',
    ],
    Databases: [
      'PostgreSQL',
      'Firebase',
      'MongoDB',
      'SupaBase',
      'Vector Databases',
    ],
    Tools: ['Docker', 'Git', 'Vercel', 'AWS', 'CI/CD'],
  };

  return (
    <div className="bg-[#0a0a0f] text-gray-100 min-h-screen font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        .font-display {
          font-family: 'Syne', sans-serif;
        }

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .gradient-bg {
          background: radial-gradient(
              ellipse at top,
              rgba(59, 130, 246, 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at bottom,
              rgba(6, 182, 212, 0.1) 0%,
              transparent 50%
            );
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glow-text {
          text-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #0ea5e9);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15);
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #0ea5e9);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.05);
        }

        .section-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-delay-1 {
          animation-delay: 0.1s;
        }
        .animate-delay-2 {
          animation-delay: 0.2s;
        }
        .animate-delay-3 {
          animation-delay: 0.3s;
        }
        .animate-delay-4 {
          animation-delay: 0.4s;
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        .skill-category {
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          transform: translateX(8px);
        }

        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: white;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-display font-bold text-xl">
              <span className="text-blue-400">HK</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link capitalize text-sm font-medium ${
                      activeSection === section
                        ? 'active text-blue-400'
                        : 'text-gray-400'
                    }`}
                  >
                    {section}
                  </button>
                ),
              )}
            </div>

            <a
              href="mailto:husnain@example.com"
              className="btn-secondary px-5 py-2 rounded-full text-sm font-medium"
            >
              Say Hi
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center gradient-bg relative pt-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="section-fade-in animate-delay-1">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-sm font-mono text-blue-400 glass-effect px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for full-time roles • Spring 2026</span>
              </div>
            </div>
          </div>

          <h1 className="font-display font-bold text-6xl md:text-8xl mb-6 section-fade-in animate-delay-2">
            I build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 glow-text">
              full-stack
            </span>
            <br />&{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-400 glow-text">
              AI-powered
            </span>{' '}
            products.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto section-fade-in animate-delay-3 leading-relaxed">
            CS senior at Brooklyn College focused on shipping production
            systems, from multimodal AI search to full-stack SaaS applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 section-fade-in animate-delay-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-lg"
            >
              View Projects
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 text-gray-600 scroll-indicator" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-sm text-blue-400 mb-2 block">
              01 / ABOUT
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8">
              Building at the intersection of engineering and AI
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a senior Computer Science student at Brooklyn College with a
              builder's mindset. I don't just prototype ideas, I ship real
              products that solve actual problems.
            </p>

            <p>
              My work spans the full stack: designing intuitive frontends in
              Next.js, architecting scalable backends with FastAPI, and
              integrating cutting-edge AI models like Opus 4.5 and GPT-5. I've
              led cross-functional teams, deployed production systems, and
              focused on what matters, building things people actually use.
            </p>

            <p>
              I'm drawn to complex systems problems: How do you make multimodal
              search feel instant? How do you design AI products that feel
              natural, not gimmicky? These are the questions that drive my work.
            </p>

            <p className="bg-gradient-to-r from-blue-300 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
              {' '}
              Currently seeking full-time Software Engineer / Full-Stack /
              Applied AI roles starting Spring 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-mono text-sm text-blue-400 mb-2 block">
              02 / PROJECTS
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card glass-effect rounded-2xl p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 floating">
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-3xl mb-2">
                        {project.name}
                      </h3>
                      <p className="text-blue-400 font-medium text-lg">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-3 glass-effect rounded-lg hover:bg-white/5 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="p-3 glass-effect rounded-lg hover:bg-white/5 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▹</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag px-4 py-2 rounded-full text-sm font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="font-mono text-sm text-blue-400 mb-2 block">
              03 / EXPERIENCE
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl">
              Skills & Background
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="font-display font-bold text-2xl mb-8 text-blue-400">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={index} className="skill-category">
                    <div className="flex items-center mb-3">
                      <Code2 className="w-5 h-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-lg">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {items.map((skill, i) => (
                        <span
                          key={i}
                          className="tech-tag px-3 py-1 rounded-lg text-sm font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-display font-bold text-2xl mb-8 text-blue-400">
                Experience
              </h3>
              <div className="space-y-8">
                <div className="glass-effect p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-xl mb-2">
                    Applied AI Engineer
                  </h4>
                  <p className="text-blue-400 mb-3 font-medium">Latitude AI</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      Led 7-person cross-functional team building Navis AI
                      platform
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      Coordinated sprints, code reviews, and technical
                      architecture decisions
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      Implemented multimodal embeddings and vector search
                      infrastructure
                    </li>
                  </ul>
                </div>

                <div className="glass-effect p-6 rounded-xl">
                  <h4 className="font-bold text-xl mb-2">Software Engineer</h4>
                  <p className="text-blue-400 mb-3 font-medium">
                    TellCo Europe (Clean Energy Investment Platform)
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      Built a production-grade investor dashboard for clean
                      energy projects in Indonesia
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      Developed responsive, data-driven UI using Next.js,
                      Tailwind CSS, and modern component patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      Collaborated closely with stakeholders to translate
                      financial and sustainability requirements into clear
                      visualizations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-6 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-sm text-blue-400 mb-4 block">
            04 / CONTACT
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-8">
            Let's Build Something
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking full-time opportunities starting Spring 2026.
            Whether you're hiring for a Software Engineer, Full-Stack, or
            Applied AI role, let's talk!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="mailto:husnain@example.com"
              className="btn-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/huscse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-xl hover:bg-white/5 transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/husnain-kh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-xl hover:bg-white/5 transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:husnaink3011@gmail.com"
              className="p-4 glass-effect rounded-xl hover:bg-white/5 transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-mono text-sm">
            Husnain Khaliq • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
