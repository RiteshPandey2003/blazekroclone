import React from "react";
import { useGetcategoryQuery } from "../redux/api";
import "../styleComponent/presentCategory.css"
const PresentCategory = () => {
  const { data, isLoading, isError } = useGetcategoryQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading category data</div>;
  }

  if (!Array.isArray(data?.data) || data.data.length === 0) {
    return <div>No category data available</div>;
  }

  return (<div className="present-CatogoryParent">
    <div className="category-container">
      {data.data.map((category) => (
        <div key={category._id} className="category-productbox">
          <div className="category-discriptionsection">
            <p>{category._id}</p>
            <p>{category.totalStock}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PresentCategory;
