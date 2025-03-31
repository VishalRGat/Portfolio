import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/vishal Gat.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full
                       hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
            <a
              href="/vishal Gat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 
                       text-gray-700 dark:text-white rounded-full hover:bg-gray-300 
                       dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <FileText size={20} className="mr-2" />
              View Resume
            </a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Resume;