import React from "react";
import fruit from "../../assets/fruit.png";
import { Link } from "react-router-dom";
import "../styleComponent/combo.css";
const Combo = () => {
  return (
    <div className="combo-container">
      <div className="combos">
        <h1>Top Combos</h1>
        <div className="combo-image-container">

          <div className="combo-product1">
            <img src={fruit} />
            <div><Link  className="link-shop">shop</Link></div>
          </div>
          <div className="combo-product1">
            <img src={fruit} />
            <div><Link  className="link-shop">shop</Link></div>
          </div>
          <div className="combo-product1">
            <img src={fruit} />
            <div><Link  className="link-shop">shop</Link></div>
          </div>
          <div className="combo-product1">
            <img src={fruit} />
            <div><Link  className="link-shop">shop</Link></div>
          </div>
        </div>
      </div>
      <div className="topSelling">
        <h1>Top Selling</h1>
        <div className="top-selling-image">
        <div className="combo-product1">
            <img src={fruit} />
            <div><Link className="link-shop">shop</Link></div>
          </div>
          <div className="combo-product1">
            <img src={fruit} />
            <div><Link className="link-shop">shop</Link></div>
          </div>
          <div className="combo-product1">
            <img src={fruit} />
            <div><Link className="link-shop">shop</Link></div>
          </div>
          <div className="combo-product1">
            <img src={fruit} />
            <div><Link className="link-shop">shop</Link></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Combo;
