import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className='my-5 bg-gradient-to-b from-red-50 to-white rounded-xl shadow-md p-4'>
            <div className='text-center py-2'>
                {/* Make heading larger */}
                <h2 className='text-4xl sm:text-5xl font-bold'>
                    <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                </h2>
                <p className='w-3/4 m-auto mt-2 text-xs sm:text-sm md:text-base text-gray-600 my-2'>
                    Unveil the New. Define Your Style. The Latest Collection is Here – Where Innovation Meets Elegance.
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCollection;
