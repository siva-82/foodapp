import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const CartSection = () => {

const navigate=useNavigate()

  const boxShadow=
  ` 5px 10px 20px rgb(0 0 0 / 0.2)`
  return (
    <>
    
  <div className='container cartSection__container'>
  <div className='row cartSection my-5'style={{boxShadow,height:"400px"}}>
    <div className='col-4 d-flex flex-column justify-content-center align-items-start' >
    <h2>Best Deals Crispy <br />  Sandwiches </h2>
    <p className='text-muted  my-3'>Enjoy the large size of sandwiches.Complete<br /> perfect slice of sandwiches </p>
    <button style={{backgroundColor: "rgb(241, 114, 40)", borderColor: "rgb(241, 114, 40)"}} onClick={()=>navigate('/Food')} className=' my-3 btn btn-primary proceed__button w-100'>Proceed to Order <span><MdOutlineKeyboardArrowRight/></span></button>
    </div>
    <div className='col-8' style={{paddingRight:"0px"}} >
        <img src="/CartImage1.png" alt="order" style={{width:"100%",height:"400px",objectFit:"cover"}} />
    </div>
    </div>
    <div className='row cartSection my-5'style={{height:"400px" ,boxShadow}}>
    <div className='col-8' style={{paddingLeft:"0px"}} >
        <img src="/CartImage2.png" alt="order" style={{width:"100%",height:"400px",objectFit:"cover"}} />
    </div>
    <div className='col-4 d-flex flex-column justify-content-center align-items-start'>
    <h2>Best Deals Crispy <br />  Sandwiches </h2>
    <p className='text-muted  my-3'>Enjoy the large size of sandwiches.Complete<br /> perfect slice of sandwiches </p>
    <button style={{backgroundColor:'#F17228',borderColor:'#F17228'}} onClick={()=>navigate('/Food')} className=' my-3 btn btn-primary w-100 proceed__button'>proceed to order <span><MdOutlineKeyboardArrowRight/></span></button>
    </div>
   
    </div>
    <div className='row cartSection my-5'style={{boxShadow,height:"400px"}}>
    <div className='col-4 d-flex flex-column justify-content-center align-items-start'>
    <h2>Best Deals Crispy <br />  Sandwiches </h2>
    <p className='text-muted my-3  '>Enjoy the large size of sandwiches.Complete<br /> perfect slice of sandwiches </p>
    <button style={{backgroundColor:'#F17228',borderColor:'#F17228'}} onClick={()=>navigate('/Food')} className=' my-3 btn btn-primary w-100 proceed__button'>proceed to order <span><MdOutlineKeyboardArrowRight/></span></button>
    </div>
    <div className='col-8' style={{paddingRight:"0px"}} >
        <img src="/CartImage3.png" alt="order" style={{width:"100%",height:"400px",objectFit:"cover"}} />
    </div>
    </div>

  </div>
    </>
  )
}

export default CartSection