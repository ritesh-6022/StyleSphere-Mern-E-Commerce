import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 py-5 px-4 text-center relative">
      <div className="inline-flex items-center border border-gray-300 px-5 py-2 rounded-full shadow-md bg-white w-full sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4 ml-2" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="absolute top-5 right-6 w-4 cursor-pointer hover:scale-110 transition"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
