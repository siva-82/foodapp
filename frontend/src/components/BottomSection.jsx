import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BottomSection = () => {
  const navigate=useNavigate() 
  return (

   
    
<div className='container-fluid bottomSection  d-flex flex-column justify-content-center align-items-center' style={{height:'300px',backgroundImage:'url(\'/bottomSection.png\')',backgroundRepeat:'round' }}>
<div className='bottomSection d-flex flex-column justify-content-center align-items-center '>
    <h1 style={{width:'550px',textAlign:'center',color:'white'}}>Are you ready to order with the beast deals?</h1>
    <button className='my-5 btn btn-primary' style={{padding:'15px',backgroundColor: "rgb(241, 114, 40)", borderColor: "rgb(241, 114, 40)"}} onClick={()=>navigate('/Food')}>PROCEED TO ORDER <span><MdOutlineKeyboardArrowRight/></span></button>
</div>

    </div>
  )
}

export default BottomSection