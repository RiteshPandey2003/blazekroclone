// MainHomeBoxes.jsx
import React from "react";
import { useGetpostsQuery } from "../redux/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styleComponent/Home.css";
import "../styleComponent/mainboxes.css";
import { Link } from "react-router-dom";

const MainHomeBoxes = ({ category }) => {
  const { data, isLoading, isError } = useGetpostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  if (!Array.isArray(data?.data) || data.data.length === 0) {
    return <div>No products available</div>;
  }

  // Filter products based on the category
  const filteredProducts = data.data.filter((product) => product.category === category);

  if (filteredProducts.length === 0) {
    return <div>No products available for the selected category</div>;
  }

  return (
    <div className="productContainer">
      <h2 className="category-title">{category}</h2>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product._id}>
            {/* Use Link to navigate to the ProductPage with the product ID */}
            <Link to={`/single-product/${product._id}`} className="linkbox">
              <div className="productbox">
                <img
                  className="productImage"
                  src={`http://localhost:8001/${product.photo.replace(/\\/g, "/")}`}
                  alt={product.name}
                />
                <h2 className="productName">{product.name}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainHomeBoxes;
