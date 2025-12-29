import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import bankingDashboard from '@/assets/bankingdashboardoop.png';
import weatherAppImage from '@/assets/weatherapi.png';
import SouthernersImage from '@/assets/SouthernersImage.png';
import zamtex from '@/assets/zamtex.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bank Management Dashboard - OOP",
      description: "A simple but expandable modern banking dashboard UI built with HTML5, CSS3, and JavaScript. Features include account overviews, and transaction histories. Made to practice OOP concepts and DOM manipulation.",
      image: bankingDashboard,
      technologies: ["React", "CSS3", "JavaScript", "OOP Principles"],
      demoUrl: "https://bankingdashboradoop.netlify.app/",
      githubUrl: "https://github.com/JoeZamir/bank-management-dashboard---OOP",
    },
    {
      id: 2,
      title: "Weather API Application",
      description: "A clean weather application working with FCC's weather API. Features DOM manipulation, API integration, and responsive design principles to provide updates based on user input.",
      image: weatherAppImage,
      technologies: ["React", "Tailwind CSS", "JavaScript", "Weather API"],
      demoUrl: "https://weatherapiappproject.netlify.app/",
      githubUrl: "https://github.com/JoeZamir/fcc-js-projects/tree/main/FCC%20JS%20Journey/Weather%20App%20-%20Asynchronous%20JS",
    },
    {
      id: 3,
      title: "Southerners Travel Agency",
      description: "A comprehensive travel booking website concept featuring destination galleries, package browsing, and booking interfaces. Focused on Southern US destinations.",
      image: SouthernersImage,
      technologies: ["React", "Tailwind CSS", "JavaScript", "UI/UX Design"],
      demoUrl: "https://southerners.netlify.app/",
      githubUrl: "https://github.com/JoeZamir/southerners-website",
    },
    {
      id: 4,
      title: "Zamtex Digital Website",
      description: "A modern digital agency website showcasing services, portfolio, Blogs, and client testimonials. Built with a focus on responsive design and user experience.",
      image: zamtex,
      technologies: ["React", "Tailwind CSS", "TypeScript", "UI/UX Design"],
      demoUrl: "https://zamtex.netlify.app",
      githubUrl: "https://github.com/JoeZamir/Zamstack",
    }
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
