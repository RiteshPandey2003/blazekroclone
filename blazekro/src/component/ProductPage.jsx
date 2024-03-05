import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useGetcategoryQuery,
  useGetProductsByCategoryQuery,
} from "../redux/api";
import "../styleComponent/ProductPage.css";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data: categoriData, error: categoryError } = useGetcategoryQuery();
  const { data: products, error: productError } =
    useGetProductsByCategoryQuery(selectedCategory);

  useEffect(() => {
    // Fetch initial category (e.g., "fruit") and set it when the component mounts
    if (categoriData && categoriData.data.length > 0) {
      setSelectedCategory(categoriData.data[0]._id); // Assuming the first category is the fruit category
    }
  }, [categoriData]);

  if (categoryError) {
    return <div>Error loading category data</div>;
  }

  if (!Array.isArray(categoriData?.data) || categoriData.data.length === 0) {
    return <div>No category data available</div>;
  }

  const getName = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="product-pages">
      <div className="category-lists">
        {categoriData.data.map((category) => (
          <div
            key={category._id}
            className={`product-boxes ${
              selectedCategory === category._id ? "selected-category" : ""
            }`}
          >
            <div className="product-description-section1">
              <p onClick={() => getName(category._id)}>{category._id}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="product-details">
        {products && !productError ? (
          <div>
            <h2>{selectedCategory} Products</h2>
            <div className="product-list">
              {products.data.map((product) => (
                <Link
                  key={product._id}
                  to={`/single-product/${product._id}`} // Specify your route path
                  className="product-box"
                >
                  <img
                    src={`http://localhost:8001/${product.photo.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                  <p>Price: {product.originalPrice}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>Select a category to view products</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
