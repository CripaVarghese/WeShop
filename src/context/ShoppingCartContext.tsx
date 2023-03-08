import {  createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children:ReactNode;
} 

type CartItem ={
  id: number;
  quantity: number;
}

type ShoppingCartContext = {
  cartQuantity: number;
  cartItems: CartItem[];
  getItemQuantity: (id:number) => number,
  increaseItemQuantity: (id:number) => void,
  decreaseItemQuantity: (id:number) => void,
  removeItemQuantity: (id:number) => void,
}  

const ShoppingCartContext=createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
}

const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
  const [cartItems,setCartItems]=useState<CartItem[]>([])

  const cartQuantity= cartItems.reduce((quantity,item) =>  quantity + item.quantity, 0 )

  const getItemQuantity = (id:number) => {
    return ( cartItems.find(item => item.id === id)?.quantity ||  0 )
  } 
  
  const increaseItemQuantity = (id:number) => {
    setCartItems(currentItems => {
      if(currentItems.find(item => item.id === id) == null) {
        return [ ...currentItems, {id, quantity:1}]
      }else {
        return currentItems.map(item => {
          if(item.id === id) {
          return {...item, quantity: item.quantity + 1}
          }
          else { return item }
        })
      } 
    })
  } 

  const decreaseItemQuantity = (id:number) => {
    setCartItems(currentItems => {
      if(currentItems.find(item => item.id === id)?.quantity ===1) {
        return currentItems.filter(item => item.id !==id)
      }else {
        return currentItems.map(item => {
          if(item.id === id) {
          return {...item, quantity: item.quantity - 1}
          }
          else { return item }
        })
      } 
    })
  } 

  const removeItemQuantity = (id:number) => {
    setCartItems(currentItems => {
     return currentItems.filter(item => item.id !== id)
       })
   }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItemQuantity, cartItems, cartQuantity}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
