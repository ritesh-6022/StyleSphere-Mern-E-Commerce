/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const statusColors = {
  'Order Placed': 'bg-blue-100 text-blue-800',
  Packing: 'bg-yellow-100 text-yellow-800',
  Shipped: 'bg-purple-100 text-purple-800',
  'Out for delivery': 'bg-indigo-100 text-indigo-800',
  Delivered: 'bg-green-100 text-green-800',
};

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
        toast.success('Status updated!');
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h3 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-4 border-pink-500 pb-2">
        Orders Management
      </h3>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start rounded-lg border-2 border-gray-200 p-6 my-4 shadow-md hover:shadow-lg transition-shadow bg-white">
            {/* Parcel Icon */}
            <div className="flex justify-center items-start">
              <img
                className="w-14 h-14"
                src={assets.parcel_icon}
                alt="Parcel Icon"
                loading="lazy"
              />
            </div>

            {/* Items & Address */}
            <div>
              <div className="text-gray-700 text-sm sm:text-base">
                {order.items.map((item, idx) => (
                  <p
                    className="py-0.5 leading-tight"
                    key={idx}
                    title={`${item.name} x ${item.quantity} ${item.size}`}>
                    <span className="font-semibold">{item.name}</span> × {item.quantity}{' '}
                    <span className="italic text-gray-500">{item.size}</span>
                    {idx !== order.items.length - 1 && ','}
                  </p>
                ))}
              </div>

              <p className="mt-4 mb-1 text-lg font-semibold text-pink-600">
                {order.address.firstName} {order.address.lastName}
              </p>

              <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state}, {order.address.country},{' '}
                  {order.address.zipcode}
                </p>
              </div>
              <p className="mt-1 font-medium text-gray-700">{order.address.phone}</p>
            </div>

            {/* Order Info */}
            <div className="text-sm sm:text-base space-y-1 text-gray-800">
              <p>
                <span className="font-semibold">Items:</span> {order.items.length}
              </p>
              <p>
                <span className="font-semibold">Method:</span> {order.paymentMethod}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{' '}
                <span
                  className={
                    order.payment ? 'text-green-600 font-bold' : 'text-red-600 font-bold'
                  }
                >
                  {order.payment ? 'Done' : 'Pending'}
                </span>
              </p>
              <p>
                <span className="font-semibold">Date:</span>{' '}
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            {/* Amount */}
            <p className="text-lg font-extrabold text-pink-600 flex items-center justify-center">
              {currency}
              {order.amount.toFixed(2)}
            </p>

            {/* Status Select */}
            <div className="flex flex-col justify-center">
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className={`p-2 rounded-md font-semibold cursor-pointer border-2 
                  ${
                    statusColors[order.status] || 'border-gray-300 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-pink-400 transition`}>
                {Object.keys(statusColors).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
