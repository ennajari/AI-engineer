import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Calendar,
  MapPin,
  Phone,
  Book,
  Code,
  Brain,
  Database,
  Terminal,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll tracking for animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
            >
              AE
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`${
                    activeSection === item 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  } transition-colors duration-200 capitalize py-2`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Abdellah Ennajari
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              AI Engineer specializing in Computer Vision & Deep Learning
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/ennajari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/ennajari-abdellah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="/api/placeholder/400/400"
                alt="Abdellah Ennajari"
                className="rounded-full shadow-xl border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <Brain size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: "Data Scientist Intern",
                company: "HighTech Governance Systems",
                period: "Aug 2024 - Oct 2024",
                location: "Casablanca",
                description: [
                  "Developed AI solutions for complex data analysis",
                  "Optimized ML algorithms for improved system performance",
                  "Implemented TensorFlow and PyTorch models"
                ]
              },
              {
                title: "AI Engineer",
                company: "3D Smart Factory",
                period: "Aug 2024 - Sep 2024",
                location: "Mohammedia",
                description: [
                  "Developed 3D dental image analysis system",
                  "Achieved 97% classification accuracy",
                  "Optimized model inference time"
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-blue-200"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {job.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: "AI & ML",
                skills: ["Deep Learning", "Computer Vision", "NLP", "3D Image Processing"]
              },
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Programming",
                skills: ["Python", "Java", "C++", "SQL", "JavaScript"]
              },
              {
                icon: <Terminal className="w-8 h-8 text-blue-600" />,
                title: "Frameworks",
                skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Get in Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span>abdellah.ennajari.23@ump.ac.ma</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span>(+212) 6 5579-8315</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>Berkane, Morocco</span>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;