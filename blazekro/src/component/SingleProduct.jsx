import React from 'react';
import { useGetProductByIdQuery } from '../redux/api';
import { useParams, useNavigate } from 'react-router-dom';
import '../styleComponent/SingleProduct.css';
import Featured from "../sideComponent/Featured"

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, isError, error } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div className="error">Error fetching product details: {error.message}</div>;
  }

  if (!product) {
    return <div className="error">No product found</div>;
  }



  return (
    <div className="single-product-container">
      <div className="single-product-details">
        <h2 className="single-product-name">{product.data.name}</h2>
        {product.data.photo && (
          <img
            className="single-product-image"
            src={`http://localhost:8001/${product.data.photo.replace(/\\/g, "/")}`}
            alt={product.data.name}
          />
        )}
        <div className="single-price-container">
          <p className="single-original-price">Original Price: ${product.data.originalPrice}</p>
          <p className="single-discount-price">Discounted Price: ${product.data.discountPrice}</p>
          {product.discountPercentage && (
            <p className="single-discount-percentage">Discount: {product.data.discountPercentage}%</p>
          )}
        </div>
        <p className="single-product-stock">Stock: {product.data.stock} units</p>
        <p className="single-product-category">Category: {product.data.category}</p>
        <div className="single-buttons-container">
          <button className="single-shop-now-button">Shop Now</button>
          <button className="single-add-to-cart-button" >
            Add to Cart
          </button>
        </div>
      </div>
      <Featured/>
    </div>
    
  );
}

export default SingleProduct;
