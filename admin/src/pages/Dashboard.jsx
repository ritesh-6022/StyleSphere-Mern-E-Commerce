import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', orders: 30 },
  { name: 'Feb', orders: 50 },
  { name: 'Mar', orders: 40 },
  { name: 'Apr', orders: 70 },
  { name: 'May', orders: 60 },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 w-full">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

        {/* ✅ Admin Profile Section */}
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md border">
          <img
            src="https://i.pravatar.cc/100?img=12" // Replace with actual admin avatar if available
            alt="Admin"
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <p className="font-semibold text-gray-700">Admin: Ritesh Kumar Rajak</p>
            <p className="text-sm text-gray-500">E-mail: admin@example.com</p>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-4 rounded-2xl shadow-md border">
          <h2 className="text-gray-500">Total Products</h2>
          <p className="text-2xl font-bold text-blue-600">152</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md border">
          <h2 className="text-gray-500">Total Orders</h2>
          <p className="text-2xl font-bold text-green-600">245</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md border">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-2xl font-bold text-yellow-600">₹1,25,000</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-md border">
          <h2 className="text-gray-500">Customers</h2>
          <p className="text-2xl font-bold text-purple-600">1,024</p>
        </div>
      </div>

      {/* Orders Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md border">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Monthly Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
