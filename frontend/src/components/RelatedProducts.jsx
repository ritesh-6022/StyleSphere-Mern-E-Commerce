/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24 px-4 sm:px-8 md:px-14 lg:px-20">
      <div className="text-center text-3xl py-4">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
        <p className="text-sm text-gray-500 mt-2">You might also like</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item, index) => (
          <div className="hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out bg-white rounded-xl p-2">
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
