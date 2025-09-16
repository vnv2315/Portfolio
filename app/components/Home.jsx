"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image"; 
import profile from "../../assets/profile.jpg";

const HomePage = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'C++ Problem Solver', 'MERN Stack Developer', 'Next.js Developer',"Tech Enthusiast",
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vishnu N V
                </span>
              </h1>

              <div className="text-2xl lg:text-3xl text-gray-600 h-12">
                I'm a{" "}
                <span className="text-blue-600 font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Passionate about solving complex problems with C++ and building
              scalable web applications with the MERN stack and Next.js. I love
              algorithmic challenges, competitive programming, and creating
              efficient full-stack solutions that deliver exceptional user
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {/* GitHub */}
              <a
                href="https://github.com/vnv2315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Github className="w-6 h-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vishnunv2315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/VishnuNV1141718"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src={profile}
                    alt="Profile"
                    className="w-72 h-72 rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full animate-bounce opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-pink-400 rounded-full animate-pulse opacity-30"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-12 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HomePage;
