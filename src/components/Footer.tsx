import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-tech-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-tech-blue hover:text-primary-glow transition-colors duration-300"
            >
              Joe Zamir
            </button>
            <p className="text-text-secondary leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional web experiences.
              Currently expanding into full-stack development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-text-secondary hover:text-tech-blue transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                title="github link"
                href="https://github.com/JoeZamir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-text-muted hover:text-tech-blue hover:bg-tech-blue/10 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                title="linkedin link"
                href="https://linkedin.com/in/joe-m-28954b23a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-text-muted hover:text-tech-blue hover:bg-tech-blue/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                title="mail link"
                href="mailto:jmiringu384@gmail.com"
                className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center text-text-muted hover:text-tech-blue hover:bg-tech-blue/10 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-text-secondary text-sm">
              Feel free to reach out for collaborations or opportunities!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-tech-blue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm flex items-center">
            © {currentYear} Zamstack. Built with{' '}
            <Heart className="mx-1 text-red-500" size={14} />{' '}
            using React & Tailwind CSS
          </p>

          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="text-text-muted hover:text-tech-blue transition-colors duration-300 text-sm"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
