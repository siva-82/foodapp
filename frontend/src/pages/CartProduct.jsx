import Button from 'react-bootstrap/Button'
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getFoodData } from '../foodStore/foodArray';

function CartProduct({id,quantity}) {
const cart=useContext(CartContext)
const productData=getFoodData(id)
  return (
    <>
    <h4>{productData.title}</h4>
    <p className='text-muted'>{quantity} total</p>
    <p className='text-muted'>Rs { (quantity * productData.price).toFixed(2)}</p>
    <Button variant='danger' size="sm" onClick={()=>cart.deleteFromCart(id) }>Remove</Button>
    <hr/>

    </>
  )
}

export default CartProduct