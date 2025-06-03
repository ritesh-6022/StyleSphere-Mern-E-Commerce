import React from 'react';

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 py-16 px-4 rounded-xl shadow-md my-10">
      <p className="text-3xl font-semibold text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-600 mt-3 text-sm sm:text-base">
        Join the Style Circle – Subscribe Now & Enjoy 20% Off Your First Order!
      </p>
      
      <form
        onSubmit={onSubmitHandler}
        className="mt-6 w-full sm:w-2/3 md:w-1/2 mx-auto flex flex-col sm:flex-row items-center gap-3">
        <input
          className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
          type="email"
          placeholder="Enter your email"
          required />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition duration-300">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
