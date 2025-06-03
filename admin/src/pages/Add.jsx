/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(backendUrl + '/api/product/add', formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');
        setCategory('Men');
        setSubCategory('Topwear');
        setBestseller(false);
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md flex flex-col gap-6">
      <div>
        <p className="mb-2 font-semibold text-blue-700">Upload Images</p>
        <div className="flex gap-4 flex-wrap">
          {[image1, image2, image3, image4].map((image, i) => (
            <label
              key={i}
              htmlFor={`image${i + 1}`}
              className="w-20 h-20 cursor-pointer border-2 border-dashed border-blue-300 rounded-md overflow-hidden flex items-center justify-center bg-white hover:border-blue-500 transition"
              title="Click to upload">
              <img
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt={`Upload ${i + 1}`}
                className="object-cover w-full h-full" />
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    if (i === 0) setImage1(file);
                    else if (i === 1) setImage2(file);
                    else if (i === 2) setImage3(file);
                    else if (i === 3) setImage4(file);
                  }
                }}
                type="file"
                id={`image${i + 1}`}
                hidden
                accept="image/*"
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 font-semibold text-blue-700">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-4 py-2 rounded-md border border-blue-300 focus:border-blue-500 outline-none shadow-sm transition"
          type="text"
          placeholder="Type product name"
          required />
      </div>

      <div>
        <p className="mb-2 font-semibold text-blue-700">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-4 py-2 rounded-md border border-blue-300 focus:border-blue-500 outline-none shadow-sm resize-y transition"
          placeholder="Write content here"
          rows={4}
          required />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-[500px]">
        <div className="flex-1">
          <p className="mb-2 font-semibold text-blue-700">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-4 py-2 rounded-md border border-blue-300 focus:border-blue-500 outline-none shadow-sm transition">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="flex-1">
          <p className="mb-2 font-semibold text-blue-700">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full px-4 py-2 rounded-md border border-blue-300 focus:border-blue-500 outline-none shadow-sm transition">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Summerwear">Summerwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className="flex-1">
          <p className="mb-2 font-semibold text-blue-700">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-4 py-2 rounded-md border border-blue-300 focus:border-blue-500 outline-none shadow-sm transition"
            type="number"
            placeholder="0"
            min={0}
            required />
        </div>
      </div>

      <div>
        <p className="mb-2 font-semibold text-blue-700">Product Sizes</p>
        <div className="flex flex-wrap gap-3 max-w-[500px]">
          {sizeOptions.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
                )
              }
              className={`px-4 py-1 rounded-md font-medium transition
                ${
                  sizes.includes(size)
                    ? 'bg-blue-400 text-white shadow-md'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}>
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className="w-5 h-5 cursor-pointer accent-blue-500" />
        <label className="cursor-pointer font-semibold text-blue-700" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
        ADD
      </button>
    </form>
  );
};

export default Add;
