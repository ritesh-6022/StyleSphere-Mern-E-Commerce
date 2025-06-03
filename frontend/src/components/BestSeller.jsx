import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-5 bg-gradient-to-b from-yellow-50 to-white rounded-xl shadow-md p-4'>
      <div className='text-center py-2'>
        <h2 className='text-4xl sm:text-5xl font-bold'>
                    <Title text1={'BEST'} text2={'SELLERS'} />
                </h2>
        <p className='w-3/4 m-auto mt-2 text-xs sm:text-sm md:text-base text-gray-600 my-2'>
        Tried. Tested. Loved. Discover the Styles Everyone’s Obsessed With – Our Best Sellers Await.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
