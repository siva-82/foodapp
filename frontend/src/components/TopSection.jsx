import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { FaMotorcycle, FaShoppingBag } from "react-icons/fa";

const TopSection = () => {
  // const boxShadow = ` 0 0 10px rgb(0 0 0 / 0.2)`;
const [active,setActive]=useState('Delivery')
  return (
    <div className="container-fluid topSection " style={{marginTop:'55px',position:'relative',backgroundColor:'#FAAA01',height:"450px",}}>
      <img className='topSection__image' src="/firstImage.png" alt="" style={{position:"absolute",borderRadius:'50px',right: "161px",    height: "90%",    bottom: "0"}}/>
    <div className="container" >
    <div className='topSection__form' style={{padding:'50px'}}>
    <div className='col-lg-7 col-md-7 col-sm-12 p-lg-5  d-flex flex-column'  >
    <h1 className='topSection__title' style={{color:'#fff',fontSize:'65px' }}>Are You Starving ?</h1>
     <p className='topSection__title text-muted'>Within a few clicks,find Meals that are accessible near you</p>
     <div  className=' w-100'style={{backgroundColor:'#fff', borderRadius:'10px',padding:'10px'}}>
     <div className='d-flex flex-row list-group ' style={{fontWeight:'600'}}>
       <div className='mx-3  d-flex list-group-item align-items-center' onClick={()=>setActive('Delivery')} style={{cursor:'pointer',border:'none',fontWeight:'600',color:` ${active==='Delivery'?'#FAAA01':''}`}}>
        <FaMotorcycle style={{fontSize:'20px'}} className='me-1' />Delivery</div> 
        <div className='mx-3 list-group-item d-flex align-items-center' onClick={()=>setActive('Pickup')} style={{border:'none',cursor:'pointer',color:` ${active==='Pickup'?'#FAAA01':''}`}} >
           <FaShoppingBag className='me-1 ' style={{fontSize:'15px'}}/>Pickup</div></div>
        <hr/>
        <div >
        <InputGroup className="mb-3 ">
         <InputGroup.Text><img style={{height:'25px'}} src="/MapMarker.png" alt=""/></InputGroup.Text>
         <Form.Control placeholder="Enter your Address" />
         <InputGroup.Text style={{fontWeight:'600',color:'#fff',background:'linear-gradient( #FF7A7A,#F65900)'}}><IoIosSearch className='mx-1'/> Find Food</InputGroup.Text>
       </InputGroup>
        </div>
     </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default TopSection;
