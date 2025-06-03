/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  // Toggle main category
  const toggleCategory = (e) => {
    const { value } = e.target;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle sub-category
  const toggleSubCategory = (e) => {
    const { value } = e.target;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply search and filter logic
  const applyFilter = () => {
    let result = [...products];

    if (showSearch && search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      result = result.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      result = result.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilteredProducts(result);
  };

  // Apply sorting logic
  const sortProducts = () => {
    let sorted = [...filteredProducts];

    switch (sortType) {
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }

    setFilteredProducts(sorted);
  };

  // Trigger filter when inputs change
  useEffect(() => {
    applyFilter();
  }, [products, search, showSearch, category, subCategory]);

  // Trigger sort when sort type changes
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 p-6 md:p-10">
      <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-gray-300 max-w-7xl mx-auto">
        {/* Left Sidebar: Filters */}
        <aside
          className={`min-w-[240px] bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out
          ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl font-semibold flex items-center cursor-pointer gap-2 select-none sm:cursor-default">
            FILTERS
            <img
              src={assets.dropdown_icon}
              alt="toggle"
              className={`h-4 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`} />
          </p>

          {/* Category Filter */}
          <div className="border border-gray-300 rounded-md pl-4 py-3 mt-6">
            <p className="mb-3 text-sm font-semibold text-blue-900">CATEGORIES</p>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="w-5 h-5 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
                {cat}
              </label>
            ))}
          </div>

          {/* Subcategory Filter */}
          <div className="border border-gray-300 rounded-md pl-4 py-3 mt-6">
            <p className="mb-3 text-sm font-semibold text-blue-900">TYPE</p>
            {['Topwear', 'Bottomwear', 'Summerwear', 'Winterwear'].map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="w-5 h-5 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500" />
                {sub}
              </label>
            ))}
          </div>
        </aside>

        {/* Right Section: Products */}
        <section className="flex-1">
          {/* Title & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-xl mb-6 gap-4">
            <Title text1="ALL" text2="COLLECTIONS" />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 px-4 py-2 text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
              <option value="relavent">Sort by: Relevance</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item._id}
                  className="transform hover:scale-[1.03] hover:shadow-lg transition-transform duration-300 rounded-lg">
                  <ProductItem
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image} />
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center mt-20">No products found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collection;
