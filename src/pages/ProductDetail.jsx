import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleBuyNow = () => {
    // Replace this with actual authentication check
    const isAuthenticated = false;
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      alert(`Product ${product.id} added to cart!`);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} />
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className='price'>${product.price}</p>
        <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
