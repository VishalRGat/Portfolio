import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2, Database, Globe, Palette, Server, Terminal,
  Cpu, Sigma, Shield, Smartphone, Gauge, Brain
} from 'lucide-react';

const technologies = [
  { icon: <Globe size={40} />, name: 'Web Technologies', description: 'HTML5, CSS3, JavaScript' },
  { icon: <Server size={40} />, name: 'Backend Development', description: 'Python, R' },
  { icon: <Database size={40} />, name: 'Databases', description: 'SQL, MySQL' },
  { icon: <Code2 size={40} />, name: 'Frontend Development', description: 'React, Native' },
  { icon: <Smartphone size={40} />, name: 'Mobile Development', description: 'React Native, Expo' },
  { icon: <Palette size={40} />, name: 'Data Visualization', description: 'Power BI, Data Visualization,MS-Office365' },
  { icon: <Gauge size={40} />, name: 'Data Analytics', description: 'Data Cleaning, Data Integration, Data Mining, Dashboarding, Statistical analysis, Data Modeling, Exploratory Data Analysis (EDA)' },
  { icon: <Brain size={40} />, name: 'AI/ML', description: 'TensorFlow, PyTorch, Linear and Logistic regression, KNN, Decision Tree, Random forest, SVM and K Means, feature selection techniques, model deployment, deep learning frameworks' },
  { icon: <Sigma size={40} />, name: 'Statistics', description: ' Descriptive, Inferential, Distributions (PDF, CDF, Normal, Uniform, t-test, z-test), Central Limit Theorem, Confidence Intervals, Hypothesis Testing, Matrices. ' }
];

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies & Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm passionate about staying current with emerging technologies while mastering established ones.
            Here's my technical toolkit that I use to build robust and scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-700 rounded-xl p-6 transform transition-all duration-300 ease-in-out hover:scale-105"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(168, 85, 247, 0.5)'; // Purple glow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Reset
              }}
            >
              <div className="text-blue-500 dark:text-blue-400 mb-4">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
