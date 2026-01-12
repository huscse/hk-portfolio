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
  Menu,
  X,
} from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
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
      github: 'https://github.com/huscse/FlashCards-Saas',
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
      github: 'https://github.com/huscse/Fitnology',
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
              rgba(15, 52, 96, 0.2) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at bottom,
              rgba(22, 165, 184, 0.12) 0%,
              transparent 50%
            );
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glow-text {
          text-shadow: 0 0 40px rgba(22, 165, 184, 0.4);
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
          background: linear-gradient(90deg, #16a5b8, #0f8fa3);
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
          border-color: rgba(22, 165, 184, 0.35);
          box-shadow: 0 20px 60px rgba(22, 165, 184, 0.2);
        }

        @media (max-width: 768px) {
          .project-card:hover {
            transform: translateY(-4px);
          }
        }

        .tech-tag {
          background: rgba(22, 165, 184, 0.1);
          border: 1px solid rgba(22, 165, 184, 0.25);
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          background: rgba(22, 165, 184, 0.2);
          border-color: rgba(22, 165, 184, 0.5);
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #0f3460, #16a5b8);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(22, 165, 184, 0.35);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(22, 165, 184, 0.45);
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: rgba(22, 165, 184, 0.5);
          background: rgba(22, 165, 184, 0.05);
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
          background: rgba(22, 165, 184, 0.3);
          color: white;
        }

        /* Mobile menu animation */
        .mobile-menu {
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        .mobile-menu.open {
          transform: translateX(0);
          opacity: 1;
        }

        .mobile-menu.closed {
          transform: translateX(100%);
          opacity: 0;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-display font-bold text-xl">
              <span className="text-[#16a5b8]">HK</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link capitalize text-sm font-medium ${
                      activeSection === section
                        ? 'active text-[#16a5b8]'
                        : 'text-gray-400'
                    }`}
                  >
                    {section}
                  </button>
                ),
              )}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="mailto:husnaink3011@gmail.com"
                className="hidden sm:block btn-secondary px-5 py-2 rounded-full text-sm font-medium"
              >
                Say Hi
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-[#16a5b8] transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mobile-menu ${
            mobileMenuOpen ? 'open' : 'closed'
          } absolute top-full left-0 w-full glass-effect border-t border-white/5`}
        >
          <div className="px-4 py-6 space-y-4">
            {['home', 'about', 'projects', 'experience', 'contact'].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 px-4 rounded-lg capitalize text-base font-medium transition-colors ${
                    activeSection === section
                      ? 'text-[#16a5b8] bg-[#16a5b8]/10'
                      : 'text-gray-400 hover:text-[#16a5b8] hover:bg-white/5'
                  }`}
                >
                  {section}
                </button>
              ),
            )}
            <a
              href="mailto:husnaink3011@gmail.com"
              className="block btn-secondary px-5 py-3 rounded-full text-sm font-medium text-center mt-4"
            >
              Say Hi
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center gradient-bg relative pt-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="section-fade-in animate-delay-1">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-[#16a5b8] glass-effect px-3 sm:px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">
                  Available for full-time roles • Spring 2026
                </span>
              </div>
            </div>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 section-fade-in animate-delay-2 px-4">
            I build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a5b8] via-[#0f8fa3] to-[#5fc3d4] glow-text">
              Full-Stack
            </span>
            <br />&{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fc3d4] via-[#0f8fa3] to-[#16a5b8] glow-text">
              AI-powered
            </span>{' '}
            products.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto section-fade-in animate-delay-3 leading-relaxed px-4">
            CS senior at Brooklyn College focused on shipping production
            systems, from multimodal AI search to full-stack SaaS applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 section-fade-in animate-delay-4 px-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-base sm:text-lg w-full sm:w-auto"
            >
              View Projects
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block">
            <ChevronDown className="w-6 h-6 text-gray-600 scroll-indicator" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <span className="font-mono text-xs sm:text-sm text-[#16a5b8] mb-2 block">
              01 / ABOUT
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
              Building at the intersection of engineering and AI
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
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

            <p className="bg-gradient-to-r from-[#16a5b8] via-[#0f8fa3] to-[#5fc3d4] bg-clip-text text-transparent font-semibold">
              Currently seeking full-time Software Engineer / Full-Stack /
              Applied AI roles starting Spring 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-24 md:py-22 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#0f3460]/5 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20">
            <span className="font-mono text-xs sm:text-sm text-[#16a5b8] mb-2 block">
              02 / PROJECTS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card glass-effect rounded-2xl p-6 sm:p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="p-3 rounded-xl bg-[#16a5b8]/10 text-[#16a5b8] floating flex-shrink-0">
                      <project.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">
                        {project.name}
                      </h3>
                      <p className="text-[#16a5b8] font-medium text-base sm:text-lg">
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
                        className="p-3 glass-effect rounded-lg hover:bg-white/5 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#16a5b8] mr-3 mt-1 flex-shrink-0">
                          ▹
                        </span>
                        <span className="text-gray-300 text-sm sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono font-medium"
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
      <section id="experience" className="py-16 sm:py-24 md:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-20">
            <span className="font-mono text-xs sm:text-sm text-[#16a5b8] mb-2 block">
              03 / EXPERIENCE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Skills & Background
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Skills */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-[#16a5b8]">
                Technical Skills
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={index} className="skill-category">
                    <div className="flex items-center mb-3">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#16a5b8] mr-2 flex-shrink-0" />
                      <h4 className="font-semibold text-base sm:text-lg">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-0 sm:ml-7">
                      {items.map((skill, i) => (
                        <span
                          key={i}
                          className="tech-tag px-2.5 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-mono"
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
              <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-[#16a5b8]">
                Experience
              </h3>

              <div className="space-y-6 sm:space-y-8">
                {/* Break Through Tech */}
                <div className="glass-effect p-4 sm:p-6 rounded-xl">
                  <h4 className="font-bold text-lg sm:text-xl mb-1">
                    AI / Machine Learning Fellow
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 space-y-1 sm:space-y-0">
                    <p className="text-[#16a5b8] font-medium text-sm sm:text-base">
                      Break Through Tech AI (Cornell Tech)
                    </p>
                    <span className="text-xs sm:text-sm text-gray-400">
                      Aug 2025 – Present
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Selected for a competitive AI fellowship with rigorous ML
                      coursework and applied industry projects
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Completed an intensive ML course covering supervised
                      learning, evaluation, and real-world tradeoffs
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Collaborated in a 7-person cross-functional team
                      integrating multimodal embeddings and vector search
                    </li>
                  </ul>
                </div>

                {/* Latitude AI */}
                <div className="glass-effect p-4 sm:p-6 rounded-xl border-l-4 border-[#16a5b8]">
                  <h4 className="font-bold text-lg sm:text-xl mb-1">
                    Applied AI Engineer
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 space-y-1 sm:space-y-0">
                    <p className="text-[#16a5b8] font-medium text-sm sm:text-base">
                      Latitude AI
                    </p>
                    <span className="text-xs sm:text-sm text-gray-400">
                      Aug 2025 – Dec 2025
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Led a 7-person cross-functional team to design and build
                      Navis, an AI-powered dataset navigation platform enabling
                      semantic search over large-scale autonomous driving
                      datasets
                    </li>

                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Owned sprint planning, technical architecture decisions,
                      and code reviews while coordinating frontend, backend, and
                      machine learning workstreams
                    </li>

                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Implemented multimodal embedding pipelines and vector
                      search infrastructure to support efficient similarity
                      search across images, captions, and metadata
                    </li>
                  </ul>
                </div>

                {/* TellCo Europe */}
                <div className="glass-effect p-4 sm:p-6 rounded-xl">
                  <h4 className="font-bold text-lg sm:text-xl mb-1">
                    Software Engineer
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 space-y-1 sm:space-y-0">
                    <p className="text-[#16a5b8] font-medium text-sm sm:text-base">
                      TellCo Europe (Clean Energy Investment Platform)
                    </p>
                    <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                      Jan 2025 – June 2025
                    </span>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Built a production-grade investor dashboard for clean
                      energy projects in Indonesia
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Developed responsive, data-driven UI using Next.js and
                      Tailwind CSS
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16a5b8] mr-2 flex-shrink-0">
                        ▹
                      </span>
                      Collaborated with stakeholders to translate financial and
                      sustainability requirements into clear visualizations
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
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#16a5b8]/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs sm:text-sm text-[#16a5b8] mb-4 block">
            04 / CONTACT
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
            Let's Build Something
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm actively seeking full-time opportunities starting Spring 2026.
            Whether you're hiring for a Software Engineer, Full-Stack, or
            Applied AI role, let's talk!
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="https://github.com/huscse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-effect rounded-xl hover:bg-white/5 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/husnain-kh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-effect rounded-xl hover:bg-white/5 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:husnaink3011@gmail.com"
              className="p-3 sm:p-4 glass-effect rounded-xl hover:bg-white/5 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-mono text-xs sm:text-sm">
            Husnain Khaliq • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
