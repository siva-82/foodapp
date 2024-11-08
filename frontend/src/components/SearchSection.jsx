import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SearchSection.css";


import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

function NextArrow(props) {
  const { className,  onClick } = props;
  return (
    
      <div
        
        style={{ display: "flex" }}
        onClick={onClick}
      >
        <IoIosArrowDroprightCircle
          className={`arrows ${className} slick-r-ss`}
          style={{ color: "#F17228" }}
        />
      </div>
   
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
  
      <div
     
        style={{}}
        onClick={onClick}
      >
        <IoIosArrowDropleftCircle
          className={`arrows ${className} slick-l-ss`}
          style={{ color: "#F17228" }}
        />
      </div>
    
  );
}

const SearchSection = ({ data }) => {
  const settings = {
    dots: true,
    speed: 500,
    margin: 10,
    padding: 5,
    slidesToShow: 6,
    slidesToScroll: 5,
    InitalSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],

    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow style={{ right: "0", top: "10px" }} />,
    prevArrow: <PrevArrow style={{ right: "10px", top: "10px" }} />,
  };

  return (
    <>
      <div
        className="container-fluid search__container d-flex flex-column justify-content-center align-items-center "
        style={{ height: "300px", background: "#FEFAF1" }}
      >
        <div className="container my-4 d-flex justify-content-between">
          <h6>Search By Food</h6>
          <div className="d-flex  mx-4">
            <Link
              to="/food"
              className="mx-3"
              style={{
                color: "#FAAA01",
                textDecoration: "none",
                
                right: "100px",
              }}
            >
              View all
            </Link>
            <div className="ms-5"></div>
          </div>
        </div>
        {/* <div className=' d- flex justify-content-between'> */}
        <div className="container  " style={{position:'relative'}}>
          <Slider className="slick-slide-box" {...settings}>
            {data?.slice(0, 10).map((meal,i) => {
              return (
                <div key={i} className="section" style={{}}>
                  {/* <img src="/hubble.jpg" alt="hubble" style={{borderRadius:"50px",height:"100px",width:"100px", margin:"10px"}} /> */}
                  <img
                    src={meal?.foodImage}
                    alt=""
                    style={{
                      borderRadius: "50px",
                      height: "100px",
                      width: "100px",
                      margin: "10px",
                    }}
                  />
                  <p>{meal?.title.substring(0, 10)}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default SearchSection;
