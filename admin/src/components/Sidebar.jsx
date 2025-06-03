import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-full md:w-[18%] min-h-screen border-r-2 bg-blue-50 shadow-lg">
      <div className="flex flex-col gap-4 pt-6 px-6 md:pl-[20%] text-[15px]">
        {[
          { to: '/dashboard', icon: assets.dashboard_icon, label: 'Dashboard' }, // ✅ Dashboard section
          { to: '/add', icon: assets.add_icon, label: 'Add Items' },
          { to: '/list', icon: assets.order_icon, label: 'List Items' },
          { to: '/orders', icon: assets.order_icon, label: 'Orders' },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-l-md border border-gray-300 border-r-0 transition-all duration-300
               hover:bg-blue-300 hover:text-white cursor-pointer
               ${isActive ? 'bg-blue-600 text-white font-semibold shadow-md' : 'text-gray-700'}`
            }>
            <img src={icon} alt={label} className="w-5 h-5" />
            <p className="hidden md:block select-none">{label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
