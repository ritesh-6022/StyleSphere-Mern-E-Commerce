import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: 'Easy Exchange Policy',
      desc: 'We offer hassle free exchange policy',
      bg: 'from-green-100 via-blue-50 to-green-100'
    },
    {
      icon: assets.quality_icon,
      title: '7 Days Return Policy',
      desc: 'We provide 7 days free return policy',
      bg: 'from-yellow-100 via-orange-50 to-yellow-100'
    },
    {
      icon: assets.support_img,
      title: 'Best Customer Support',
      desc: 'We provide 24/7 customer support',
      bg: 'from-pink-100 via-red-50 to-pink-100'
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-12 text-center py-10 px-4">
      {policies.map((policy, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${policy.bg} p-6 rounded-xl shadow hover:scale-105 transition duration-300 w-64`}>
          <img src={policy.icon} className="w-12 mx-auto mb-4" alt="" />
          <p className="font-semibold text-gray-800 mb-1">{policy.title}</p>
          <p className="text-gray-600 text-sm">{policy.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
