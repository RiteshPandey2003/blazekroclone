// ProductList.js
import React, { useState, useEffect } from "react";
import { useGetpostsQuery } from "../redux/api";
import "../styleComponent/productList.css";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetpostsQuery({ page });

  const [loadingMore, setLoadingMore] = useState(false);

  ;useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight ||
        loadingMore
      ) {
        return;
      }

      setLoadingMore(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadingMore]);

  useEffect(() => {
    if (!loadingMore) return;

    const fetchMoreProducts = async () => {
      try {

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setPage((prevPage) => prevPage + 1);
        setLoadingMore(false);
      } catch (error) {
        console.error("Error fetching more products:", error.message);
      }
    };

    fetchMoreProducts();
  }, [loadingMore]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  if (!Array.isArray(data?.data) || data.data.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <>
      <div className="productContainer">
        {data.data.map((product) => (
          <div key={product._id} className="productbox">
            <img
              className="productImage"
              src={`http://localhost:8001/${product.photo.replace(
                /\\/g,
                "/"
              )}`}
              alt={product.name}
            />
            <div className="discriptionsection">
              <h2 className="">{product.name}</h2>
              <button>Add Cart</button>
            </div>
            <div className="discriptionsection">
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
