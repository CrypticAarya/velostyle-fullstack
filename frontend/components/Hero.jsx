import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Full-screen hero with background image + main CTAs
const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image with dark gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvwkCESt0YIrqGAV-ZJofeswndh4RTlOi9yNpAgM06hsJpZ9dWQ197cZX3y37U5YMlGO3jwKxYg0tFOCC9BPoCXfQqMMJWyuQ42b1baf0Jvmnsvg8a-CmXzhYCPf_PkXtVm0wgMyoiGq_Obb4PMwUlZO7ejc0GgESxRF51tIED5BgsEkdosCPM36ZSLr6xEOxH_N0rCQ_D3OInP3zEDYLs2VpT4gwqsukMnNuLB0LzuVEjzqYgZNk-2G6HHWSH0O6rMUCfW_9Sla8")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background-dark/90 backdrop-blur-[1px]" />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          {/* Main headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg"
          >
            Velostyle – Made in India.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary">
              Delivered Today.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={fadeInUp}
            className="max-w-3xl text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white/90"
          >
            The premium fast-commerce platform for discovering and receiving
            authentic, locally-made fashion and lifestyle goods in hours.
          </motion.h2>

          {/* Primary actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center"
          >
            <motion.a
              href="#for-customers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg bg-primary text-background-dark text-lg font-bold tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
            >
              Join Customer Waitlist
            </motion.a>
            <motion.a
              href="#for-brands"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg border border-white/40 bg-white/10 backdrop-blur-sm text-white text-lg font-bold tracking-wide transition-all"
            >
              List Your Brand
            </motion.a>
          </motion.div>

          {/* Launch note */}
          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-sm font-medium tracking-wider uppercase mt-4"
          >
            Launching soon in Pune. Expanding to other cities next.
          </motion.p>
        </motion.div>
      </div>

      {/* Simple scroll-down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;