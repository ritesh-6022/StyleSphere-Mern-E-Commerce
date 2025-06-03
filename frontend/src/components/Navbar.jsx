import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className='flex items-center justify-between py-5 px-6 sm:px-12 shadow-md bg-white text-gray-800 font-medium z-50 relative'>

      <Link to='/'><img src={assets.logo} className='w-36 hover:scale-105 transition-all duration-200' alt="Logo" /></Link>

      <ul className='hidden sm:flex gap-8 text-sm'>
        {['/', '/collection', '/about', '/contact'].map((path, idx) => (
          <NavLink
            key={idx}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 hover:text-pink-600 transition-all duration-200 ${
                isActive ? 'text-pink-600' : 'text-gray-700'
              }`
            }
          >
            <p>{['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][idx]}</p>
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center gap-6'>

        <img onClick={() => { setShowSearch(true); navigate('/collection') }}
          src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition' alt="Search" />

        {/* Profile & Dropdown */}
        <div className='relative group'>
          <img
            onClick={() => token ? null : navigate('/login')}
            className='w-5 cursor-pointer hover:scale-110 transition'
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && (
            <div className='absolute hidden group-hover:flex flex-col gap-2 w-40 bg-white shadow-md rounded p-3 right-0 top-7 z-20'>
             <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-pink-600'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-pink-600'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-pink-600'>Logout</p>
            </div>
          )}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-110 transition' alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 flex items-center justify-center text-white bg-pink-600 rounded-full text-[10px] font-semibold'>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white z-40 shadow-md transition-all duration-300 ease-in-out ${visible ? 'w-3/4' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col h-full text-gray-700'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-4 border-b cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p className='font-medium'>Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, idx) => (
            <NavLink
              key={idx}
              onClick={() => setVisible(false)}
              className='py-4 pl-6 hover:bg-gray-100 border-b transition'
              to={path}
            >
              {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][idx]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
