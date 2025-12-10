import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Preview of launch categories; each has a name + image + subtitle
const categories = [
  {
    name: 'Apparel',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCALHxcP0ZEWRT7DM59o_cxfy-K_f9Ea_1ryxrGM2B3nPbH2KbaOa4cS5QcokvQpzNUm8vwsyrD5nWixlmygonD-temo47ixXHB7H7MpcNcYPa3Bz0ops5iC1-r_lNRUt5xqfoJST9bh1RJH3sqSw3W00LLtDs1xhjuyEtHdcJ9g67rNPq3jLcRdch_V-W8os62OUVRKxGfDgBwNyULiH4CALPJr8XWlLPyhcYcqrxPI4zYdRghxQ8q0pnREio2uIgQ08a66KGsboU',
    description: 'Modern meets Traditional',
  },
  {
    name: 'Accessories',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIm_fvGM9yZwYXeRNzdqcu0xOYH9x91NR5DHByVtafjBvW-KMt9d-TOxWwf7Odam83s8qBGWJLT9kCYCiypTalVqP3pEc8OUbycK9TzJ_HjD57WCUBUMrOjk9dhUcivYHntbGjlmkm8ATBV2SD7DJ5-qgOrdCuvhjnL-kI34yBmQ_IFYN1ZS2NAPgqL8pKBsvdySQUMpFPSHSxUScrfHzBqGp9lbKJrbKh-OHrV93WjHssqgA5nOs2inDxAVf8bdDYD0m-5b1H4_M',
    description: 'Handcrafted Perfection',
  },
  {
    name: 'Home Decor',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqNyYRMsi-WW-bmaNP-WzVaM9RxuqyrzSKqcPQaMIQDpj1zld9Aa7gXYTqsWP6nnQebwgUxDvHHpakgQ2FbEap1UVgwfglH0zPg5obs9ES2E31kchB_vQ8T2E1zJQiQ6ZeO_3U9MhnCMaB6k2CciMy8gQ-rZ_wyWEkSaDv8_MMHg_oJw_PIDRIO4-6aZ2syqyn-OUvWR0azUX1JChnqpPl4wG76hMKrTHAysch0EGdDbyzBp-sN0EvH7LiPEfgmtroRPu6QFoHhBA',
    description: 'Elevate your Space',
  },
  {
    name: 'Beauty & Wellness',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJD4udjWhfhs1luEyEli5bkIYorJidaERUzN-_6g8eT_imlaEEX0kqHk1z8cBiVki88sQPM_ENvxxLuFFXYeqcx_MxgLlakhhvTVpa46ZOUM9fQL5biKEpiaCxlHRqIidg0a9Qk6xEESDdKVDqqsYAgM_ps4QvsYVBmjb37cB9hauWcRCiA6fIYAhWFTNcMqawbhmLv3FX6B8ioD3VtLLyZ4cEK76FolH-XhnR-U20cZs2AagXnbPi9r2HqwN0xi1-0FOoW-atgfI',
    description: 'Pure & Organic',
  },
];

const Categories = () => {
  return (
    <section id="categories" className="w-full py-24 bg-white dark:bg-background-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-xs tracking-[0.2em] uppercase"
          >
            Explore Our World
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Categories We'll Launch With
          </motion.h3>
        </div>

        {/* Category cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <motion.img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-serif text-2xl font-bold text-white mb-1">
                  {category.name}
                </h4>
                <p className="text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                  {category.description}
                </p>
                <div className="w-12 h-1 bg-primary mt-3 rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;