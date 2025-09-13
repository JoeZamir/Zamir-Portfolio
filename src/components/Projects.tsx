import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import paymentUiImage from '@/assets/payment-ui-project.jpg';
import weatherAppImage from '@/assets/weather-app-project.jpg';
import travelAgencyImage from '@/assets/travel-agency-project.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Payment UI Clone",
      description: "A modern, responsive payment interface built with React and Tailwind CSS. Features card validation, form handling, and smooth animations for an optimal user experience.",
      image: paymentUiImage,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Form Validation"],
      demoUrl: "https://payment-ui-demo.com",
      githubUrl: "https://github.com/username/payment-ui",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "A clean weather application with real-time data, 5-day forecasts, and location-based services. Includes local storage for favorite cities and responsive design.",
      image: weatherAppImage,
      technologies: ["React", "Weather API", "Local Storage", "Responsive Design"],
      demoUrl: "https://weather-app-demo.com",
      githubUrl: "https://github.com/username/weather-app",
    },
    {
      id: 3,
      title: "Southerners Travel Agency",
      description: "A comprehensive travel booking website concept featuring destination galleries, package browsing, and booking interfaces. Focused on Southern US destinations.",
      image: travelAgencyImage,
      technologies: ["React", "Tailwind CSS", "JavaScript", "UI/UX Design"],
      demoUrl: "https://southerners.netlify.app/",
      githubUrl: "https://github.com/JoeZamir/southerners-website",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Featured <span className="text-tech-blue">Projects</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A showcase of my recent work in frontend development, featuring responsive designs
            and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-surface border-tech-blue/20 hover:border-tech-blue/50 transition-all duration-300 hover:shadow-elegant group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-tech-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-tech-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-tech-blue/10 text-tech-blue rounded-full border border-tech-blue/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="tech"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="glass"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/JoeZamir" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
