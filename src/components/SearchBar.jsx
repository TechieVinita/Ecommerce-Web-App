import React from 'react';

const SearchBar = ({ searchTerm, handleSearchChange, category, handleCategoryChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Wear</option>
        <option value="women's clothing">Women's Wear</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default SearchBar;
