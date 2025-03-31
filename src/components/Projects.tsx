import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import telecom from '../assets/images/Telecom.jpg';
import medi from '../assets/images/MediDr.jpg';
import weather from '../assets/images/weather.jpg';
import fx from '../assets/images/fx analysis.jpg';
import sale from '../assets/images/Sales.jpg';

const projects = [
  {
    title: 'Telecom Churn Analysis & Prediction ',
    description: 'Telecom Churn Prediction uses Logistic Regression to identify customers likely to churn, achieving 95% accuracy for better retention strategies.🚀',
    image: telecom,
    github: 'https://github.com/VishalRGat/Customer-Churn-Analysis-and-Prediction',
    live: 'https://customer-churn-analysis-and-prediction-2024.streamlit.app/',
    tags: ['Python', 'ML', 'Tensorflow']
  },
  {
    title: 'MediDr (Doctors Appointment)',
    description: 'A Doctors Appointment Booking Website built with React that allows users to schedule consultations with specialists easily. It features real-time booking, doctor profiles, and patient management for a seamless healthcare experience. ',
    image: medi,
    github: 'https://github.com/VishalRGat/MediDr',
    live: 'https://medi-dr-blush.vercel.app/',
    tags: ['React', 'TailWindCSS', 'Vercel']
  },
  {
    title: 'Real-Time Weather App using Expo',
    description: 'Real-Time Weather App built with Expo fetches live weather data, displaying temperature, humidity, and forecasts with a clean, responsive UI. 🌤️📱🚀',
    image: weather,
    github: 'https://github.com/VishalRGat/WeatherApp-Expo-',
    live: 'https://weatherappbyvishalgat.netlify.app/',
    tags: ['Javascript', 'Expo', 'Native']
  },
  {
    title: 'To-Do App For Daily using React',
    description: 'To-Do App built with React helps manage daily tasks with an intuitive UI, featuring add, edit, delete, and completion tracking. ✅📅🚀',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    github: 'https://github.com/VishalRGat/To-Do',
    live: 'https://todobyvishalgat.netlify.app/',
    tags: ['Javascript', 'Expo', 'Native']
  },
  {
    title: 'Forex Trading Spread Analysis',
    description: 'Forex Trading Spread Analysis is an EDA on historical trades, examining profit/loss trends, spread impact, and trading patterns to optimize strategies. 📊💹🚀',
    image: fx,
    github: 'https://github.com/VishalRGat/Forex-Trade-Analysis',
    //live: 'https://example.com',
    tags: ['Python', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Ecommerce Dashboard Analysis using PowerBI',
    description: 'Ecommerce Dashboard Analysis in Power BI visualizes sales, revenue, and customer trends, enabling data-driven decision-making for business growth. 📊🚀',
    image: sale,
    github: 'https://github.com/VishalRGat/Ecommerce-Dashboard-Analysis-PowerBI-',
    /*live: 'https://example.com',*/
    tags: ['SQL', 'PowerBI', 'Kaggle']
  }
  
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in different technologies and domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg 
                         hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 
                               rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;