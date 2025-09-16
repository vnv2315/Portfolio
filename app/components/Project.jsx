import { useState } from 'react';
import { ExternalLink, Github, Code2, Globe, Database, Trophy, ArrowRight, Calendar, Star } from 'lucide-react';
import chat_app from '../../assets/chat_app.png'
import shopiy from '../../assets/Shopiy.png'
import UniHive from '../../assets/UniHive.png'
import Image from "next/image"; 

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Chat App",
      description:
        "A real-time chat application built with Node.js, Express, Socket.IO, and MongoDB. Users can register, login, send messages, and chat in real-time with advanced features like image sharing and profile management.",
      image: chat_app,
      technologies: [
        "Node.js",
        "Express",
        "Socket.IO",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcryptjs",
        "Cloudinary",
        "CORS"
      ],
      category: "Backend",
      type: "Backend",
      github: "https://github.com/vnv2315/Chat-App",
      featured: true,
      date: "2025",
      highlights: [
        "JWT Authentication",
        "Real-time Messaging",
        "User Status Tracking",
        "Image Sharing via Cloudinary",
        "Profile Management",
        "Seen/Unseen Messages"
      ]
    },
    {
      id: 2,
      title: "Shopiy - E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with customer shopping experience, secure payments, and an admin dashboard for managing products, orders, and analytics.",
      image: shopiy,
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Stripe",
        "JWT",
        "Cloudinary",
        "Multer"
      ],
      category: "Full Stack",
      type: "Full Stack",
      github: "https://github.com/vnv2315/shopiy",
      featured: true,
      date: "2025",
      highlights: [
        "Modern UI with Tailwind + shadcn/ui",
        "Persistent Cart & Order Tracking",
        "Stripe Payments Integration",
        "Admin Dashboard for Products & Orders",
        "Cloudinary Image Uploads",
        "Analytics & Real-time Updates"
      ]
    },
    {
      id: 3,
      title: "UniHive",
      description:
        "UniHive is a responsive educational platform for students and educators to manage courses, share resources, and collaborate in an interactive, mobile-friendly environment.",
      image: UniHive,
      technologies: ["React", "Vite", "Tailwind CSS", "Netlify"],
      category: "Frontend",
      type: "Frontend",
      github: "https://github.com/your-username/unihive", // replace with your repo
      featured: true,
      date: "2025",
      highlights: [
        "Interactive Learning Modules",
        "Responsive & Mobile-friendly",
        "Modern UI with Tailwind",
        "Fast Development with Vite"
      ]
    }
  ];
  

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getIcon = (category) => {
    switch(category) {
      case 'Full Stack': return <Database className="w-4 h-4" />;
      case 'Frontend': return <Globe className="w-4 h-4" />
      case 'Backend': return <Globe className="w-4 h-4" />
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const getGradient = (category) => {
    switch(category) {
      case 'Full Stack': return 'from-blue-500 to-purple-600';
      case 'Frontend': return 'from-green-500 to-blue-500';
      case 'Backend': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work spanning competitive programming, full-stack web development, and algorithm implementation
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:transform hover:scale-105'
              }`}
            >
              {filter !== 'All' && getIcon(filter)}
              {filter}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getGradient(project.category)}`}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-gray-500 flex items-center ml-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a href="https://github.com/vnv2315?tab=repositories" className="flex gap-2 cursor:pointer">
                      <span  className="text-gray-600 hover:text-gray-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </span>
                      <span className="text-blue-600 hover:text-blue-700 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub for more repositories and contributions to open source projects.
            </p>
            <a
              href="https://github.com/vnv2315"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;