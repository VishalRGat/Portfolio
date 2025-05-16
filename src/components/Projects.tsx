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
    description: 'A Doctors Appointment Booking Website built with React that allows users to schedule consultations with specialists easily. It features real-time booking, doctor profiles, and patient management for a seamless healthcare experience.',
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
    tags: ['Python', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Ecommerce Dashboard Analysis using PowerBI',
    description: 'Ecommerce Dashboard Analysis in Power BI visualizes sales, revenue, and customer trends, enabling data-driven decision-making for business growth. 📊🚀',
    image: sale,
    github: 'https://github.com/VishalRGat/Ecommerce-Dashboard-Analysis-PowerBI-',
    tags: ['SQL', 'PowerBI', 'Kaggle']
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore a collection of my projects showcasing a blend of technical expertise and practical solutions across various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-gray-800 hover:scale-110 hover:bg-gray-200 transition-all"
                    >
                      <Github size={22} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full text-gray-800 hover:scale-110 hover:bg-gray-200 transition-all"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700 transition-all"
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
