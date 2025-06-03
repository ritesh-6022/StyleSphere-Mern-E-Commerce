import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      {/* Hero Section */}
      <motion.div variants={sectionVariants} initial="hidden" animate="visible" custom={0}>
        <Hero />
      </motion.div>

      {/* Latest Collection Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={1}>
        <LatestCollection />
      </motion.div>

      {/* Best Seller Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}     custom={2}>
        <BestSeller />
      </motion.div>

      {/* Policy Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={3}>
        <OurPolicy />
      </motion.div>

      {/* Newsletter Section */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={4}>
        <NewsletterBox />
      </motion.div>
    </div>
  );
};

export default Home;
