import React, { useRef } from 'react'
import FoodCard from './FoodCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PopularItems.css'

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import './PopularItems.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` ${className} slick-next-pop  `}
      style={{ ...style, display: "block", zIndex:'1' }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className="arrows" style={{color:'#F17228'}}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` ${className} slick-prev-pop  `}
      style={{ ...style, display: "block", zIndex:'1' }}
      onClick={onClick}
    >
    <IoIosArrowDropleftCircle className="arrows" style={{color:'#F17228'}}/>

    </div>
  );
}

const PopularItems = ({data}) => {
  const settings = {
    dots:false,
    speed: 500,
    margin:10,
    padding:5,
    infinite: false,
    autoplay: false,
    // autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    InitalSlide : 0,
    
    responsive: [
      {
        breakpoint: 480,
        settings: {
          width:200,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          
        }
      },
      
      
    ],
    
    
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  }
  const sliderRef = useRef();
  return (
    <>
      
        <h3 className="container my-5 d-flex justify-content-center">Popular Items</h3>
        <div className=' d-flex justify-content-between'>
       
      <div className="container"  style={{height:"500px" }}>
      <Slider className='slick-slide-box' {...settings}>
      {data?.slice(0,10)?.map((food)=> <FoodCard foodData={food}/> )}
    </Slider>
</div>
</div>
    </>
  )
}

export default PopularItems