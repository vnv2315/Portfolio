"use client"
import { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Trophy, 
  Zap, 
  Shield, 
  Smartphone, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using the MERN stack and Next.js for scalable, performant solutions.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Custom web application development",
        "Responsive UI/UX implementation",
        "Database design and integration",
        "API development and integration",
        "Performance optimization",
        "SEO-friendly architecture"
      ],
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      timeline: "2-8 weeks"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Modern, responsive frontend development with React.js and Next.js, focusing on user experience and performance.",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "React.js application development",
        "Next.js static and dynamic sites",
        "Responsive web design",
        "Interactive UI components",
        "Performance optimization",
        "Cross-browser compatibility"
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      timeline: "1-6 weeks"
    },
    {
      id: 3,
      title: "Backend API Development",
      description: "Robust backend solutions with Node.js and Express.js, including RESTful APIs, authentication, and database management.",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "User authentication systems",
        "Third-party integrations",
        "Server deployment and scaling",
        "API documentation"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Authentication"],
      timeline: "2-6 weeks"
    },
    
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and technical needs through detailed consultation.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Development & Testing",
      description: "Building your solution with clean code, best practices, and thorough testing throughout.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Deployment & Support",
      description: "Launching your project and providing ongoing support, maintenance, and optimization.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Trophy className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development solutions from competitive programming to full-stack web applications
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3">
                <div className="text-blue-600 mr-2">
                  {stat.icon}
                </div>
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              {/* Service Header */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.timeline}
                  </p>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
                {service.features.length > 3 && (
                  <p className="text-sm text-gray-500 italic">+{service.features.length - 3} more features</p>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {service.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs">
                    +{service.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Pricing and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="font-semibold text-gray-900">Starting from ₹1,000/hr</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        {activeService !== null && (
          <div className="bg-white rounded-2xl p-8 shadow-2xl mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${services[activeService].gradient} text-white mr-4`}>
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{services[activeService].title}</h3>
                    <p className="text-gray-600">{services[activeService].description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-1">Timeline</h5>
                    <p className="text-gray-600">{services[activeService].timeline}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-1">Pricing</h5>
                    <p className="text-gray-600">Starting from ₹1,000/hr</p>
                  </div>
                </div>

                <a href="#contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              connect with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;