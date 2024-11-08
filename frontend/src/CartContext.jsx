import { createContext, useEffect, useState } from "react";
import { foodArray,getFoodData } from "./foodStore/foodArray";

export const CartContext = createContext({
  items: [],
  getFoodQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});
function getInitialState() {
  
  const items = localStorage.getItem('cartFoods')
  return items ? JSON.parse(items) : []
}
export function CartProvider({ children }) {
  const [cartFoods, setCartFoods] = useState(getInitialState);


  useEffect(() => {
    localStorage.setItem('cartFoods', JSON.stringify(cartFoods))
  }, [cartFoods])


  function getFoodQuantity(id) {
    const quantity = cartFoods.find(
      (food) => food.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id){

    const quantity=getFoodQuantity(id);

    if(quantity === 0){
        setCartFoods(
            [...cartFoods,{id:id,quantity:1}]
        )
    }else{
        setCartFoods(
            cartFoods.map(
                food=>food.id=== id?{...food,quantity:food.quantity + 1}:food
            )
        )
    }

  }
  
  function removeOneFromCart(id){
    const quantity=getFoodQuantity(id)

    if(quantity==1){
        deleteFromCart(id);
    }else{
        setCartFoods(
            cartFoods.map(
                food=>food.id=== id?{...food,quantity:food.quantity - 1}:food
            )
        )
    }

  }

  function deleteFromCart(id) {
    setCartFoods(
        cartFoods=>cartFoods.filter(currentFood=>{
            return currentFood.id!=id
        })
    )
  }

  function getTotalCost(){
    let totalCost=0;
    cartFoods.map((cartItem)=>{
        const foodData =getFoodData(cartItem.id);
        totalCost += (foodData.price * cartItem.quantity)
    }) 
    return totalCost
  }
  const contextValue = {
    items:cartFoods,
    getFoodQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider
