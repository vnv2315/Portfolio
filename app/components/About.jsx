import { Code2, Database, Globe, Trophy, Target, Zap, BookOpen, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Problem Solving",
      icon: <Trophy className="w-6 h-6" />,
      items: ["C++", "Data Structures", "Algorithms", "LeetCode"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      items: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT, OAuth)"],
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Database & Tools",
      icon: <Code2 className="w-6 h-6" />,
      items: ["MongoDB", "Git & GitHub", "Postman", "VS Code"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Built", icon: <Zap className="w-5 h-5" /> },
    { number: "Always", label: "Learning Mode", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3rd year BE student at AIT Pune, passionate about coding, problem solving, and building full-stack web applications.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Code2 className="w-6 h-6 text-blue-600 mr-3" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I started my programming journey with <strong className="text-gray-800">C++</strong> 
                  while exploring <strong className="text-gray-800">DSA</strong> and competitive programming. 
                  Platforms like <strong className="text-gray-800">LeetCode</strong> helped me strengthen my problem-solving skills.
                </p>
                <p>
                  Later, I discovered my passion for <strong className="text-gray-800">web development</strong>, 
                  diving into the <strong className="text-gray-800">MERN stack</strong> and building projects like 
                  e-commerce apps, dashboards, and real-time chat applications.
                </p>
                <p>
                  Currently, I am exploring <strong className="text-gray-800">Next.js</strong> and 
                  advanced frontend techniques to build performant, scalable, and aesthetically pleasing applications.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <div className="text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href="https://drive.google.com/drive/folders/1zGVxw5oht1XY3tr2raqL4e6qMcw877H9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>


          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-3`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I'm Currently Doing */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What I'm Currently Working On
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Competitive Programming</h4>
              <p className="text-gray-600 text-sm">Solving DSA problems on LeetCode, improving problem-solving speed & accuracy</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Full-Stack Projects</h4>
              <p className="text-gray-600 text-sm">Building projects using MERN & Next.js</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Learning & Growth</h4>
              <p className="text-gray-600 text-sm">Exploring advanced Next.js, system design, and improving DSA fundamentals daily</p>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default About;
