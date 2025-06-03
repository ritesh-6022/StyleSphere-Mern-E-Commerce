/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return

    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className="mb-4 text-2xl font-semibold text-gray-700">All Products List</p>
      <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
        {/* List Table Header */}
        <div className="hidden md:grid grid-cols-[80px_1fr_1fr_1fr_60px] items-center bg-gradient-to-r from-pink-300 to-purple-400 text-white font-semibold text-sm uppercase px-4 py-3 select-none">
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div className="text-center">Action</div>
        </div>

        {/* Product List */}
        {list.length === 0 ? (
          <p className="p-4 text-center text-gray-500">No products available</p>
        ) : (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[80px_1fr_1fr_1fr_60px] items-center gap-4 border-b border-gray-200 px-4 py-3 hover:bg-pink-50 transition-colors cursor-default">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border border-gray-300 shadow-sm" />
              <p className="font-medium text-gray-800 truncate" title={item.name}>
                {item.name}
              </p>
              <p className="text-pink-600 font-semibold">{item.category}</p>
              <p className="hidden md:block font-semibold text-purple-700">
                {currency}
                {item.price.toFixed(2)}
              </p>
              <button
                onClick={() => removeProduct(item._id)}
                className="text-red-500 hover:text-red-700 font-bold transition-colors text-right md:text-center"
                aria-label={`Remove ${item.name}`}
                title="Remove product">
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default List
