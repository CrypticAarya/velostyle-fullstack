import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Static list of key value props
const featuresData = [
  {
    icon: <Truck size={40} />,
    title: 'Hyperlocal Delivery',
    description:
      'Get unique products from your city delivered to you in record time. No more waiting days for shipping.',
  },
  {
    icon: <ShieldCheck size={40} />,
    title: 'Authentic Indian Brands',
    description:
      'Discover and support talented local artisans and homegrown businesses creating genuine products.',
  },
  {
    icon: <Sparkles size={40} />,
    title: 'Curated Collections',
    description:
      'Our team handpicks the best fashion, home decor, and lifestyle items to ensure premium quality.',
  },
];

// Explains "What is Velostyle?"
const Features = () => {
  return (
    <section
      id="what-is-velostyle"
      className="w-full py-20 sm:py-32 bg-background-light dark:bg-background-darker relative overflow-hidden"
    >
      {/* Soft glow background circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-3 block"
          >
            What is Velostyle?
          </motion.span>
          <motion.h3
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Experience the best of local craftsmanship,
            <br /> delivered at the speed of now.
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            Velostyle is a curated marketplace that connects you with the finest Made-in-India brands,
            offering hyperlocal delivery to bring their creations to your doorstep within hours.
          </motion.p>
        </motion.div>

        {/* 3 feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/50 transition-colors shadow-lg hover:shadow-xl dark:shadow-none"
            >
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-serif">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;