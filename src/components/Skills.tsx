import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Palette,
  Smartphone,
  Database,
  Server,
  Wrench,
  CheckCircle,
  Clock
} from 'lucide-react';

const Skills = () => {
  const currentSkills = [
    { name: "HTML5", level: 100, icon: Code },
    { name: "CSS3", level: 90, icon: Palette },
    { name: "JavaScript", level: 90, icon: Code },
    { name: "React", level: 70, icon: Code },
    { name: "Tailwind CSS", level: 60, icon: Palette },
    { name: "Responsive Design", level: 90, icon: Smartphone },
  ];

  const learningSkills = [
    { name: "Node.js", progress: 20, icon: Server },
    { name: "Express", progress: 10, icon: Server },
    { name: "MongoDB", progress: 10, icon: Database },
    { name: "PostgreSQL", progress: 15, icon: Database },
    { name: "REST APIs", progress: 20, icon: Wrench },
    { name: "Git & GitHub", progress: 80, icon: Code },
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "Chrome DevTools",
    "Netlify", "Vercel", "npm", "Vite"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Skills & <span className="text-tech-blue">Expertise</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            My current technical abilities and the technologies I'm actively learning
            on my journey to becoming a full-stack developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Current Skills */}
          <Card className="bg-surface border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="text-tech-blue mr-3" size={24} />
                <h3 className="text-2xl font-bold text-text-primary">Current Skills</h3>
              </div>

              <div className="space-y-6">
                {currentSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <IconComponent className="text-tech-blue mr-2" size={16} />
                          <span className="text-text-primary font-medium">{skill.name}</span>
                        </div>
                        <span className="text-text-muted text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-surface-elevated rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Currently Learning */}
          <Card className="bg-surface border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="text-tech-blue mr-3" size={24} />
                <h3 className="text-2xl font-bold text-text-primary">Currently Learning</h3>
              </div>

              <div className="space-y-6">
                {learningSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <IconComponent className="text-tech-blue mr-2" size={16} />
                          <span className="text-text-primary font-medium">{skill.name}</span>
                        </div>
                        <span className="text-text-muted text-sm">Learning...</span>
                      </div>
                      <div className="w-full bg-surface-elevated rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-tech-blue/60 to-tech-blue h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.progress}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="bg-surface border-tech-blue/20 mt-12">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Wrench className="text-tech-blue mr-3" size={24} />
              <h3 className="text-2xl font-bold text-text-primary">Tools & Technologies</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-surface-elevated border border-tech-blue/30 text-text-primary rounded-lg hover:bg-tech-blue/10 hover:border-tech-blue/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Journey */}
        <div className="text-center mt-16">
          <div className="bg-gradient-surface p-8 rounded-2xl border border-tech-blue/20">
            <h3 className="text-xl font-bold text-text-primary mb-4">
              My Learning Journey
            </h3>
            <p className="text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Started with frontend fundamentals and now expanding into backend technologies.
              My goal is to become a well-rounded full-stack developer capable of building
              complete web applications from concept to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
