import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import profilepic from '../assets/images/Image-1.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Picture with Sun Glow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative w-52 h-52 mx-auto"
        >
          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-full blur-xl animate-pulse z-0"
            style={{
              background: 'radial-gradient(circle at center, #facc15, #f472b6,rgb(30, 187, 222), #38bdf8)',
              opacity: 0.7,
            }}
          ></div>

          {/* Profile Image */}
          <img
            src={profilepic}
            alt="Profile"
            className="relative w-52 h-52 rounded-full shadow-lg border-4 border-white dark:border-gray-800 z-10"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Vishal R Gat
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Data Analyst | Front-end Developer
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="prose prose-lg dark:prose-invert mx-auto mb-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            I believe in pushing boundaries, turning challenges into opportunities, and creating solutions that make an impact.
            With a passion for technology, creativity, and continuous learning, I strive to build, improve, and innovate every
            step of the way. Driven by curiosity and ambition, I turn ideas into reality — one project at a time.
          </p>
        </motion.div>

        {/* Contact Me Button + Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center space-y-4 mb-12"
        >
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full 
               transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>

          <p className="text-gray-600 dark:text-gray-300 text-lg">
            📧 Email:{' '}
            <a href="mailto:gatvishal2025@gmail.com" className="text-blue-500 hover:underline">
              gatvishal2025@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <SocialLink href="https://github.com/VishalRGat" icon={<Github size={24} />} />
          <SocialLink href="https://www.linkedin.com/in/vishal-gat/" icon={<Linkedin size={24} />} />
          <SocialLink href="https://www.instagram.com/_vishalgat_1232__/" icon={<Instagram size={24} />} />
          <SocialLink href="mailto:gatvishal2025@gmail.com" icon={<Mail size={24} />} />
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Home;
