import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Name and Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-text-primary">Hi, I'm </span>
            <span className="text-tech-blue">Joe Zamir</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-text-secondary mb-8">
            Frontend Developer | <span className="text-tech-blue">On the path to Full-Stack</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            I’m Joe Zamir(Miringu), a frontend developer focused on building clean, functional, and user-friendly
            web interfaces. My current toolkit includes HTML, CSS, JavaScript, React, and Tailwind CSS.
            I’m actively learning backend technologies (Node.js, Express, and databases) with the goal
            of growing into a full-stack developer. I enjoy turning ideas into working products and
            breaking down complex concepts into simple, maintainable code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="min-w-[200px]"
            >
              View My Work
            </Button>
            <Button
              variant="tech"
              size="xl"
              onClick={() => scrollToSection('contact')}
              className="min-w-[200px]"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              title="github profile"
              href="https://github.com/JoeZamir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-tech-blue transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              title="linkedin profile"
              href="https://linkedin.com/in/joe-m-28954b23a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-tech-blue transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              title="mail link"
              href="mailto:jmiringu384@gmail.com"
              className="text-text-muted hover:text-tech-blue transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
