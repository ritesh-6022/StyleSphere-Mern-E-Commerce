/* eslint-disable react/prop-types */
import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <p className="text-gray-500 text-lg">
        {text1} <span className="text-indigo-600 font-semibold">{text2}</span>
      </p>
      <div className="w-10 sm:w-14 h-[2px] bg-indigo-500 rounded-full"></div>
    </div>
  );
};

export default Title;
