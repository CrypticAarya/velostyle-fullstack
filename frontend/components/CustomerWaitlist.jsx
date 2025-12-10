import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../utils/animations';
import toast from 'react-hot-toast';

// Waitlist form for customers who want early access
const CustomerWaitlist = () => {
  // Form state
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('Pune');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle "Join waitlist" submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace later with real backend call)
    setTimeout(() => {
      toast.success(`Thanks ${name}! You're on the list.`);
      setIsSubmitting(false);
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <section
      id="for-customers"
      className="w-full py-20 bg-background-light dark:bg-background-dark relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: explanation / marketing copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="p-10 sm:p-16 flex flex-col justify-center bg-gradient-to-br from-background-dark to-background-darker text-white"
            >
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
                For Customers
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Join the Waitlist
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Be the first to know when Velostyle launches in your city. Get
                exclusive early access, launch offers, and a chance to discover
                incredible local brands before anyone else.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-primary-light">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Limited spots available for early access</span>
                </div>
              </div>
            </motion.div>

            {/* Right: actual waitlist form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="p-10 sm:p-16 bg-white dark:bg-transparent"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aarav Sharma"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aarav.sharma@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* City select */}
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    City
                  </label>
                  <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                  >
                    <option className="bg-white dark:bg-gray-800">Pune</option>
                    <option className="bg-white dark:bg-gray-800">
                      Mumbai (coming soon)
                    </option>
                    <option className="bg-white dark:bg-gray-800">
                      Bengaluru (coming soon)
                    </option>
                  </select>
                </div>

                {/* Submit button with loading state */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full py-4 px-6 rounded-lg bg-primary hover:bg-primary-light text-background-dark font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-background-dark"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Get Early Access'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerWaitlist;