import React from 'react';
import fruit from "../../assets/fruit.png"
import vegitable from "../../assets/vegitable.png"
import { Link } from 'react-router-dom';
import "../styleComponent/Featured.css"
const Featured = () => {
  return (
    <div className='featured-Section'>
      <h1>Featured</h1>
    <div className='featured-Container'>
        <div className="featured-image1">
           <img src={fruit} className='image'/>
           <div className='featured-discription'>
             <h1>Fruit</h1>
             <Link className='features-link'>shop</Link>
           </div>
        </div>
        <div className="featured-image1">
           <img src={vegitable} className='image'/>
           <div className='featured-discription'>
             <h1>Fruit</h1>
             <Link className='features-link'>shop</Link>
           </div>
        </div>
        <div className="featured-image1">
           <img src={fruit} className='image'/>
           <div className='featured-discription'>
             <h1>Fruit</h1>
             <Link className='features-link'>shop</Link>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Featured