import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, Send, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xblaqjql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Submission failed",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jmiringu384@gmail.com",
      link: "mailto:jmiringu384@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Remotely",
      link: null
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/JoeZamir",
      handle: "@JoeZamir"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/joe-m-28954b23a",
      handle: "Joe Zamir"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Get In <span className="text-tech-blue">Touch</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you.
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-surface border-tech-blue/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-primary">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-surface-elevated border-tech-blue/30 text-text-primary focus:border-tech-blue"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-surface-elevated border-tech-blue/30 text-text-primary focus:border-tech-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-text-primary">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-surface-elevated border-tech-blue/30 text-text-primary focus:border-tech-blue"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-primary">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-surface-elevated border-tech-blue/30 text-text-primary focus:border-tech-blue resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-surface border-tech-blue/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-6">Contact Information</h3>

                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-elevated transition-colors duration-300">
                        <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-tech-blue" size={20} />
                        </div>
                        <div>
                          <p className="text-text-muted text-sm">{info.title}</p>
                          <p className="text-text-primary font-medium">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a key={info.title} href={info.link} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={info.title}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-surface border-tech-blue/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-6">Connect With Me</h3>

                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface-elevated hover:border-tech-blue/40 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-tech-blue/10 rounded-lg flex items-center justify-center group-hover:bg-tech-blue/20 transition-colors duration-300">
                          <IconComponent className="text-tech-blue" size={20} />
                        </div>
                        <div>
                          <p className="text-text-primary font-medium group-hover:text-tech-blue transition-colors duration-300">
                            {social.name}
                          </p>
                          <p className="text-text-muted text-sm">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-primary p-1 rounded-lg">
              <div className="bg-surface p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-text-primary font-medium">Available for Work</span>
                </div>
                <p className="text-text-secondary text-sm">
                  Open to frontend development opportunities and full-stack learning collaborations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
