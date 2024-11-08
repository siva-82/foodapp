import React, { useState } from "react";
import "./Home.css";
import "../App.css";
const InstallAppSection = () => {
  return (
    <>
      <div className="installSection__install container-fluid d-flex flex-column justify-content-center align-items-center " style={{background:"url(/wave.svg)" }}>

        

        <div className="d-flex container justify-content-center">
          <div className="installSection__container d-flex mt-5 " style={{background:'#fff',height:"150px",borderRadius:"50px"}}>
            <div className="d-flex justify-content-between" >
              <div className=" d-flex  align-items-center">
                <img
                  src="/install1.png"
                  alt="icon"
                  style={{ margin: "10px", width: "110px", height: "50px" }}
                />
                <div className="gradient d-flex mx-3 flex-column">
                  <h2>Daily</h2>
                  <h2>Discount</h2>
                </div>
              </div>
              <div className="divider"
                style={{
                  alignSelf:'center',
                  margin: "10px",
                  borderLeft: "2px solid #ccc6c6",
                  height: "50px",
                }}
              ></div>
            </div>
            <div className="d-flex justify-content-between">
              <div className=" d-flex  align-items-center">
                <img
                  src="/install2.png"
                  alt="icon"
                  style={{ margin: "10px", width: "110px", height: "50px " }}
                />
                <div className="gradient d-flex mx-3 flex-column ">
                  <h2 className="gradient">Live</h2>
                  <h2 className="gradient">Tracing</h2>
                </div>
              </div>
              <div className="divider"
                style={{
                  alignSelf:'center',
                  margin: "10px",
                  borderLeft: "2px solid #ccc6c6 ",
                  height: "50px",
                }}
              ></div>
            </div>
            <div className="d-flex justify-content-between">
              <div className=" d-flex align-items-center">
                <img
                  src="/install3.png"
                  alt="icon"
                  style={{ margin: "10px", width: "110px", height: "50px " }}
                />
                <div className="gradient d-flex mx-3 flex-column">                 
                  <h2>Quick</h2>
                  <h2>Delivery</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        



        <div className=" mt-5 w-100 d-flex  justify-content-center align-items-end">
          
          {/* <div className="d-flex my-5 justify-content-start"> */}
          <img className='phone' src="./phoneInstall.png" alt="" />
            <div className="installSection__second d-flex my-5  justify-content-start align-self-center ">
              <div className=" mx-4 ">
                {/* <div> */}
                  <h1 className='gradient'style={{fontSize:'50px',fontWeight:'700'}}>Install the App</h1>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                    distinctio tenetur non provident itaque laudantium!
                  </p>
                {/* </div> */}
                <div   className="installSection__app d-flex align-items-center">
                  
                  <div  className="installSection__Store d-flex mt-4 align-items-center justify-content-start"
                    style={{              
                      background:'#fff',
                      margin:' 0 10px 0 0',
                      width: "-webkit-fill-available",
                      padding:'0 10px 0 10px',
                      borderRadius:'5px'
                    }}
                  >
                  <div className="installSection__StoreContainer"><img src='/DownloadGlogo.png'></img></div>
                   <div className="mx-1"><p> get it on </p><h6>Google Play </h6></div>
                  </div>
                  

                  <div className="installSection__Store d-flex  mt-4 align-items-center justify-content-start"
                    style={{
                      background:'#fff',
                      margin:' 0 10px 0 0',
                      width: "-webkit-fill-available",
                      padding:'0 10px 0 10px',
                      borderRadius:'5px'
                    }}
                  >
                    <div className="installSection__StoreContainer"><img src='/DownloadAlogo.png'></img></div>
                   <div className="mx-1"><p> Download it on </p><h6>Apple Store</h6></div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  ) 
}

export default InstallAppSection;
