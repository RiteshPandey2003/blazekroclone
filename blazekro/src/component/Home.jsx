import React from 'react';
import PresentCategory from '../sideComponent/PresentCategory';
import MainHomeBoxes from '../sideComponent/MainHomeBoxes';
import OnlyForYou from './onlyForYou';
import Featured from '../sideComponent/Featured';
import Combo from '../sideComponent/Combo';

const Home = () => {
  return (
    <>
      <PresentCategory />

      <div className='section2'>
        <div className='section2-child1'>
          <MainHomeBoxes category="fruit" className="images-section2" />
          <MainHomeBoxes category="vegitable" className="images-section2" />
          <MainHomeBoxes category="cold drink" className="images-section2" />
          <MainHomeBoxes category="dry fruit" className="images-section2" />
        </div>
        <div className='section2-child2'>
          <div className="aboutus">
            <h2>About us</h2>
            <h1>
              BlazeKro
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit perspiciatis corporis qui culpa! Magnam corporis ea voluptatibus. Aut, quae molestias provident magnam quia quisquam quis enim esse ratione voluptas natus non totam, iusto, quo cumque ut nihil sunt neque eaque quod exercitationem fuga? Accusantium?
            </p>
          </div>
        </div>
      </div>
      <OnlyForYou />
      <Featured />
      <Combo />
    </>
  );
};

export default Home;
