import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: 'Latest Arrivals',
    subtitle: 'Our Bestsellers',
    image: assets.hero_img,
    cta: 'Shop Now',
    bg: 'from-pink-100 to-white',
  },
  {
    title: 'Best Collection',
    subtitle: 'Fresh Styles',
    image: assets.hero_img2,
    cta: 'Explore',
    bg: 'from-yellow-100 to-white',
  },
  {
    title: 'Smart Casuals for You',
    subtitle: 'Editor’s Picks',
    image: assets.hero_img3,
    cta: 'Discover',
    bg: 'from-purple-100 to-white',
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className={`relative flex flex-col sm:flex-row bg-gradient-to-r ${current.bg} border rounded-xl overflow-hidden mt-4 shadow-md transition-all duration-700`}>
      {/* Left Content */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 px-6 sm:px-12 text-[#414141]'>
        <div>
          <div className='flex items-center gap-2 mb-3'>
            <p className='w-10 h-[2px] bg-pink-500'></p>
            <p className='uppercase text-sm font-medium tracking-wider'>{current.subtitle}</p>
          </div>
          <h1 className='text-3xl lg:text-5xl prata-regular font-bold leading-tight text-gray-800'>
            {current.title}
          </h1>
          <button
            onClick={() => navigate('/collection')}
            className='mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-semibold py-2 px-5 rounded-full transition-all'>
            {current.cta}
            <span className='text-xl'>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <img className='w-full sm:w-1/2 object-cover' src={current.image} alt="Hero Slide" />

      {/* Bottom-Center Dots */}
      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? 'bg-pink-600' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
