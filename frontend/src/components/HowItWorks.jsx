import React from "react";

const HowItWorks = ({img,title,desc}) => {
  return (
    <>
      
      <div className="featuresSection card text-center mt-5" style={{ width: "300px",border:'none',background:'none'}}>
        <div>
          <img
            className="card-img position-relative"
            style={{ width:"150px",height:"150px" }}
            src={img}
            alt=""
          ></img>
          
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className=" mb-2 " style={{color:'#D9D9D9'}}>{desc}</p>
         
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
