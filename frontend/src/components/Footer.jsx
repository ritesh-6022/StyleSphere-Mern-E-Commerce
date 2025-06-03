import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-20 px-6 sm:px-12'>

      <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12 text-sm text-gray-700'>

        <div>
          <img src={assets.logo} className='mb-4 w-32' alt="Logo" />
          <p className='text-gray-600 max-w-sm'>
            Discover a new dimension of style where technology meets personality – <strong>StyleSphere</strong> isn’t just a store, it’s your smart styling partner, redefining fashion with AI-powered confidence.
          </p>
        </div>

        <div>
          <p className='text-xl font-semibold mb-4 text-pink-600'>COMPANY</p>
          <ul className='flex flex-col gap-2'>
            <NavLink to="/" className='hover:text-pink-600 transition'>Home</NavLink>
            <NavLink to="/about" className='hover:text-pink-600 transition'>About Us</NavLink>
            <NavLink to="/delivery" className='hover:text-pink-600 transition'>Delivery</NavLink>
            <NavLink to="/privacy" className='hover:text-pink-600 transition'>Privacy Policy</NavLink>
          </ul>
        </div>

        <div>
          <p className='text-xl font-semibold mb-4 text-pink-600'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2'>
            <li>📞 +91 7488254763</li>
            <li>📧 contact@stylesphere.com</li>
          </ul>
        </div>

      </div>

      <hr className='my-6 border-gray-400' />
      <p className='text-center text-x4 text-gray-500'>© 2025 StyleSphere.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
