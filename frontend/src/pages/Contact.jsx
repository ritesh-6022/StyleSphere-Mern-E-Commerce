import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="text-center text-3xl pt-12 border-t border-gray-300">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-14 flex flex-col justify-center items-center md:flex-row gap-12 mb-32 px-6 max-w-6xl mx-auto">
        <img
          className="w-full md:max-w-[480px] rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          src={assets.contact_img}
          alt="Contact StyleSphere"
        />
        <div className="flex flex-col justify-center gap-8 text-gray-700 max-w-md">
          <p className="font-semibold text-2xl text-blue-900">Our Store</p>
          <p className="leading-relaxed text-gray-800">
            123, Building-5 <br /> Jamshedpur, Jharkhand, India
          </p>
          <p className="leading-relaxed text-gray-800">
            Tel: <a href="tel:+917488254763" className="text-blue-700 hover:underline">+91 7488254763</a> <br /> 
            Email: <a href="mailto:admin@stylesphere.com" className="text-blue-700 hover:underline">admin@stylesphere.com</a>
          </p>

          <p className="font-semibold text-2xl text-blue-900">Careers at StyleSphere</p>
          <p className="leading-relaxed text-gray-800">
            We are always looking for passionate individuals. Join our growing team today!
          </p>

          <button
            className="bg-gray-300 text-white px-7 py-3 text-base font-semibold rounded-lg 
                       hover:bg-black hover:text-blue-700 transform hover:scale-105 active:scale-95 
                       transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
