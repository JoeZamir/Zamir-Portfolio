import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Zap, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and achieving full-stack proficiency through hands-on projects and real-world applications."
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Genuinely excited about web development and creating digital experiences that make a positive impact on users."
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks, always staying current with industry trends and best practices."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Enjoy working with teams and believe that the best solutions come from diverse perspectives and open communication."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            About <span className="text-tech-blue">Me</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Learn more about my journey, motivations, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main About Content */}
          <div className="space-y-6">
            <Card className="bg-surface border-tech-blue/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">My Story</h3>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I’ve always been fascinated by computers—whether PCs or phones—and spent
                    much of my childhood tinkering with them, often imagining myself as a “hacker”
                    (really, I just wanted to be a good coder). Life took me in a different direction
                    for a while, but about a year ago I decided to give coding a real shot. I quickly
                    realized how much I enjoyed it, especially the thrill of solving problems and seeing
                    something I built come to life.
                  </p>
                  <p>
                    Since then, I’ve focused on mastering frontend development with React, Tailwind, and
                    JavaScript. I value performance, clean UIs, and accessibility, and I work in short
                    iterations that let me learn fast and adapt quickly. One of my recent projects, Southerners,
                    is a travel agency platform that helps tourists book accommodations and organize transportation
                    in Mombasa.
                  </p>
                  <p>
                    Now that I’ve built a strong foundation in frontend, I’m expanding into backend development to grow
                    into a full-stack role. Programming is challenging, but that’s exactly why I enjoy it—the learning
                    never stops, and every solved problem feels rewarding.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-surface border-tech-blue/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      Deepening React knowledge with hooks, context, and state management
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      Learning backend technologies: Node.js, Express, and MongoDB
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      Building full-stack projects to apply both frontend and backend skills
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-tech-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-text-secondary">
                      Contributing to open source projects and collaborating with other developers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values & Characteristics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary mb-6">What Drives Me</h3>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.title}
                  className="bg-surface border-tech-blue/20 hover:border-tech-blue/40 transition-all duration-300 hover:shadow-elegant group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-tech-blue/10 rounded-lg flex items-center justify-center group-hover:bg-tech-blue/20 transition-colors duration-300">
                          <IconComponent className="text-tech-blue" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-tech-blue transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-text-secondary leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary p-1 rounded-2xl inline-block">
            <div className="bg-surface p-8 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                I'm always interested in new opportunities, collaborations, and learning from
                experienced developers. Whether it's a project, mentorship, or just a conversation
                about web development, I'd love to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
