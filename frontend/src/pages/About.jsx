import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white">
      <div className="text-2xl text-center pt-10 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 px-4 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <img className="w-full md:max-w-[450px] rounded-xl shadow-md" src={assets.about_img} alt="About StyleSphere" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 text-[15px]">
          <p>
            StyleSphere was born out of a passion for innovation and a desire to revolutionize online shopping. Our mission: make it effortless and exciting for customers to explore a world of products from home.
          </p>
          <p>
            We curate a diverse selection of high-quality fashion, beauty, and lifestyle products from trusted brands and suppliers, ensuring something for every taste.
          </p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            Empowering customers with **choice**, **convenience**, and **confidence**—our goal is to deliver an exceptional shopping experience from browsing to delivery.
          </p>
        </div>
      </div>

      <div className="text-xl text-center py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-sm gap-5 px-4 mb-20">
        {[
          {
            title: "Quality Assurance",
            desc: "We meticulously select each product to meet stringent quality standards.",
          },
          {
            title: "Convenience",
            desc: "Enjoy a seamless and intuitive shopping experience on any device.",
          },
          {
            title: "Exceptional Support",
            desc: "Our support team ensures your satisfaction at every step.",
          },
        ].map((item, idx) => (
          <div key={idx} className="border p-8 rounded-lg bg-white shadow hover:shadow-md transition-all duration-300">
            <b className="text-base text-gray-800">{item.title}</b>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
