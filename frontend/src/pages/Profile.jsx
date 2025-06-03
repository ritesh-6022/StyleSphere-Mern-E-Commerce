import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const { backendUrl } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/user/profile`, {
          headers: { token: localStorage.getItem('token') },
        });

        if (res.data.success) {
          setUser(res.data.user);
          setFormData({ name: res.data.user.name, email: res.data.user.email });
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error('Failed to fetch profile');
      }
    };

    fetchProfile();
  }, [backendUrl]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit updated profile
  const handleSave = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error('Name and Email cannot be empty');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put(
        `${backendUrl}/api/user/profile`,
        { name: formData.name, email: formData.email },
        { headers: { token: localStorage.getItem('token') } }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setUser(res.data.user);
        setEditMode(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to update profile');
    }
    setLoading(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData({ name: user.name, email: user.email });
    setEditMode(false);
  };

  if (!user) return <div className="text-center mt-20 text-gray-600 animate-pulse">Loading Profile...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg shadow-lg text-gray-900">
      <h2 className="text-3xl font-prata-regular font-semibold mb-6 text-white text-center drop-shadow-lg">My Profile</h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-white font-medium mb-1">Name</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-sm"
              autoFocus />
          ) : (
            <p className="text-white text-lg">{user.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-white font-medium mb-1">Email</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-sm" />
          ) : (
            <p className="text-white text-lg">{user.email}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              disabled={loading}
              className={`bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-md transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}>
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-md transition">
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-white hover:bg-gray-100 text-white-600 font-semibold px-6 py-2 rounded-md transition shadow-md">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
