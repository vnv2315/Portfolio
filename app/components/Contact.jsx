"use client"
import Navbar from './Navbar';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  User,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  ExternalLink,
  Coffee,
  Code,
  Zap
} from 'lucide-react';

const Contact = () => {

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORM_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          projectType: formData.projectType,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("✅ Message sent successfully!");
        setSubmitted(true);

        // reset form safely
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          projectType: "web-development",
        });
      } else {
        alert("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web-development'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vishnunv2315@gmail.com",
      description: "Send me an email anytime",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "9400673872",
      description: "Call me for urgent queries",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Pune, Maharashtra, IN",
      description: "Available for local meetups",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule",
      value: "Book a Meeting",
      description: "Let's discuss your project",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      username: "@vnv2315",
      link: "https://github.com/vnv2315",
      color: "hover:text-gray-900",
      description: "Check out my repositories"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      username: "vishnunv2315",
      link: "https://www.linkedin.com/in/vishnunv2315/",
      color: "hover:text-blue-600",
      description: "Let's connect professionally"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "X (Twitter)",
      username: "@VishnuNV1141718",
      link: "https://x.com/VishnuNV1141718",
      color: "hover:text-blue-400",
      description: "Follow me for tech updates"
    }
  ];

  const quickActions = [
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Coffee Chat",
      description: "15-30 min casual discussion",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Code Review",
      description: "Get your code reviewed",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Quick Consultation",
      description: "Fast technical guidance",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'algorithm-solving', label: 'Algorithm & Problem Solving' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'training', label: 'Training & Mentoring' },
    { value: 'other', label: 'Other' }
  ];

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 ">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-4`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{action.description}</p>
              
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Send Me a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="vishnunv2315@gmail.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-gray-900">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="What's your project about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project requirements, timeline, budget, and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="w-6 h-6 text-blue-400 mr-3" />
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      <p className="text-blue-400 font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="p-2 rounded-lg bg-white/10 mr-4 group-hover:bg-white/20 transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{social.name}</h4>
                      <p className="text-blue-400 text-sm">{social.username}</p>
                      <p className="text-gray-400 text-xs">{social.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-6 border border-green-400/30">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Typically responds within 2-4 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;