/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer group"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition duration-300 bg-white">
        <img
          className="hover:scale-110 transition-transform duration-500 ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm font-medium group-hover:text-indigo-600 transition">{name}</p>
      <p className="text-sm font-semibold text-gray-800">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
