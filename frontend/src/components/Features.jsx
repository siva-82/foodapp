import React from "react";
import HowItWorks from "./HowItWorks";

const Features = () => {


  
  return (
    <>
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height:'550px',background:" linear-gradient(180deg, #FFEFCE 1%, #FFFFFE 45% ) " }}>
    <div className="container">
    <h3 className="container mt-5 d-flex justify-content-center" style={{color:'#F17228'}}>How Does It Work</h3>
    <div className=' d-flex justify-content-between'>
      <HowItWorks desc={'Choose the location where your food will be delivered'} title={'Select Location'} img={'/MapMarker.png'}/>
      <HowItWorks desc={'Choose over hundreds of menus to  pick your favourite food'}  title={'Choose order'} img={'/Menu.png'} />
      <HowItWorks desc={'It\'s quick,safe and simple. Select  several methods of payment'}  title={'Pay Advance'} img={'/Invoice.png'} />
      <HowItWorks desc={'Food is made and delivered directly to your home'}  title={'Enjoy Meal'} img={'/Donut.png'} />
      </div>
      </div>
      </div>
    </>
  );
};

export default Features;
