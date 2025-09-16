import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Heart,
  ArrowUp,
  Code2,
  Globe,
  Database,
  Trophy,
  Coffee,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Full-Stack Development", href: "#services", icon: Globe },
    { name: "Algorithm Solutions", href: "#services", icon: Trophy },
    { name: "Frontend Development", href: "#services", icon: Code2 },
    { name: "Backend APIs", href: "#services", icon: Database },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/vnv2315",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vishnunv2315/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/VishnuNV1141718",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "vishnunv2315@gmail.com",
      href: "mailto:vishnunv2315@gmail.com",
    },
    { icon: Phone, text: "9400673872", href: "tel:9400673872" },
    { icon: MapPin, text: "Pune, Maharashtra, IN", href: "#" },
  ];


  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & About */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Vishnu N V
                </h3>
                <p className="text-gray-300 text-lg mb-4">
                  C++ Problem Solver | MERN Stack Developer | Next.js Expert
                </p>
                <p className="text-gray-400 leading-relaxed max-w-lg">
                  Passionate about solving complex problems with C++ and
                  building scalable web applications. I specialize in
                  competitive programming, full-stack development, and creating
                  efficient solutions that make a difference.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Get in Touch
                </h4>
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <div className="text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      {contact.text}
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-lg ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                      >
                        <div className="text-blue-400 mr-2 group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {service.name}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                <h5 className="font-semibold text-white mb-2 flex items-center">
                  <Coffee className="w-4 h-4 mr-2 text-blue-400" />
                  Ready to collaborate?
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Let's discuss your next project over a virtual coffee!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group"
                >
                  Start a conversation
                  <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <span>© {currentYear} Vishnu N V. Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
                <span>using Next.js & Tailwind CSS</span>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-110 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-white mb-1">
                  Stay Updated
                </h4>
                <p className="text-gray-300 text-sm">
                  Get notified about new projects and tech insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
