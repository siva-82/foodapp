import React, { useState } from 'react'

const Footer = () => {
    const [cities1]=useState(["Finland","Denmark","Iceland","Sweden",,, ])
    const [cities2]=useState(["Netherlands","Norway","Luxembourg","Switzerland"])
    const [cities3]=useState(["Australia","New Zealand","Costa Rica","Kuwait",  ])
    const [cities4]=useState(["Netherlands","Norway","Luxembourg","Switzerland"])
    const [cities5]=useState(["Canada","Belgium","Ireland","Czechia",])
    const [cities6]=useState([ "Lithuania","United Kingdom","Dubai","Austria"])
    
    

  return (
<>
<div className='container-fluid'style={{background:'black',color:'white'}}>
<div className='container col-12 pt-5 '><h4 className=' pt-5 '>Our Top Cities</h4>

   <div className='w-100 d-flex justify-content-between'>
   <ul className=' d-flex flex-column mt-3 ' style={{paddingLeft:'0px',listStyle: 'none'}}>
    {cities1.map((city)=>(<li className='mt-3'style={{textDecoration:"none"}}>{city}</li>))}</ul>
     <ul className='  d-flex flex-column mt-3' style={{paddingLeft:'0px',listStyle: 'none'}}>
    {cities2.map((city)=>(<li className='mt-3'style={{textDecoration:"none"}}>{city}</li>))}</ul>
    <ul className='  d-flex flex-column mt-3' style={{paddingLeft:'0px',listStyle: 'none'}}>
    {cities3.map((city)=>(<li className='foot3 mt-3'style={{textDecoration:"none"}}>{city}</li>))}</ul>
     <ul className='  d-flex flex-column mt-3' style={{paddingLeft:'0px',listStyle: 'none'}}>
    {cities4.map((city)=>(<li className='mt-3'style={{textDecoration:"none"}}>{city}</li>))}</ul>
     <ul className='  d-flex flex-column mt-3' style={{paddingLeft:'0px',listStyle: 'none'}}>
    {cities5.map((city)=>(<li className='mt-3'style={{textDecoration:"none"}}>{city}</li>))}</ul>
   </div>
   </div>
   <hr/>

   <div className='container d-flex justify-content-between container mt-5'>
 <div className="row footerRow d-flex justify-content-between">
 <div className='d-flex justify-content-between col-sm-12 col-md-6 col-lg-6'>
   <td className='d-flex flex-column mt-3 ' style={{paddingLeft:'0px',listStyle: 'none'}}>
    <th>Company</th>
    {cities1.map((city)=>(<tr className='mt-3'style={{textDecoration:"none"}}>{city}</tr>))}</td>
     <td className='  d-flex flex-column mt-3' style={{paddingLeft:'0px',listStyle: 'none'}}>
     <th>Contact</th>
    {cities2.map((city)=>(<tr className='mt-3'style={{textDecoration:"none"}}>{city}</tr>))}</td>
    <td className='  d-flex flex-column mt-3' style={{paddingLeft:'0px',listStyle: 'none'}}>
    <th>Legal</th>
    {cities3.map((city)=>(<tr className='mt-3'style={{textDecoration:"none"}}>{city}</tr>))}</td>
    </div>
    <div className='col-sm-12 col-md-5 col-lg-5'>
    <div className='footer__subscription w-100 d-flex flex-column '>
    <h3 className=' mt-3'>Follow Us</h3>
    <div className='mt-5 footer__subscription' style={{opacity:'0.5'}}>Social Icons</div>
    <div className='mt-5 footer__subscription'>Receive Exclusive Offers in your mailbox</div>
    <div className='my-5 footer__subscription d-flex footer__form'>
      <input placeholder='Enter Your Email' style={{borderRadius:"5px", width: "100%", height:"50px" }} type="text" />
    <button className='btn btn-primary shadow ' style={{backgroundColor: "rgb(241, 114, 40)", borderColor: "rgb(241, 114, 40)",borderRadius:"5px",width: '50%',marginLeft:" 10px"}}>Subscribe</button></div>
    </div>
    </div>
    </div>
   </div>
   <hr/>
   <div className='footer__copyrights container d-flex justify-content-between'>
<div className='my-2 col-lg-4 col-sm-5 d-flex  '><div>All rights Reserved </div>
<div className='mx-2'> &copy;</div>
<div > Company, 2024</div></div>
<div  className='my-2'><span  className='my-2 ' style={{opacity:'0.5'}}> Made by</span> Siva Ragupathy</div>
   </div>
    </div>
</>
  )
}

export default Footer