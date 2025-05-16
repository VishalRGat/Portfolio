import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Clock, User } from 'lucide-react';

const blogs = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development',
    date: 'February 18, 2025',
    readTime: '3 min read',
    author: 'Vishal Gat',
    link: 'https://medium.com/@gatvishal1232/future-in-3e5cecc2eafb'
  },
  {
    title: 'Analysis in EDA',
    excerpt: 'Unveiling Insights: A Comprehensive Guide to Univariate and Bivariate Analysis',
    date: 'May 14, 2024',
    readTime: '5 min read',
    author: 'Vishal Gat',
    link: 'https://medium.com/@gatvishal1232/unveiling-insights-a-comprehensive-guide-to-univariate-and-bivariate-analysis-in-exploratory-data-bdc7f19e882a'
  },
  {
    title: 'Demystifying Data Types',
    excerpt: 'Beginner’s Guide to Understanding and Handling Data in Data Science Projects',
    date: 'May 14, 2024',
    readTime: '3 min read',
    author: 'Vishal Gat',
    link: 'https://medium.com/@gatvishal1232/demystifying-data-types-a-beginners-guide-to-understanding-and-handling-data-in-data-science-e73fb7ea4a7a'
  }
];

const Blogs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="blogs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I write about web development, technology trends, and best practices.
            Follow my blog to stay updated with the latest in tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg 
                         transform hover:scale-105 hover:shadow-purple-500/30 
                         transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {blog.author}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read More
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://medium.com/@gatvishal1232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full
                       hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Posts on Medium
            <ExternalLink size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
