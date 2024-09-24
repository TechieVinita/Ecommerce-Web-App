import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.price.toString().includes(searchLower)
      );
    });
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="home-container">
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="filter-options">
        <button onClick={() => setSearchQuery('')}>All Categories</button>
        <button onClick={() => setSearchQuery('jewelery')}>Jewellery</button>
        <button onClick={() => setSearchQuery("men's clothing")}>Men's Wear</button>
        <button onClick={() => setSearchQuery("women's clothing")}>Women's Wear</button>
        <button onClick={() => setSearchQuery('electronics')}>Electronics</button>
      </div>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
