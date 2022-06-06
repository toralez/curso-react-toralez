//@ts-check
import React, { useEffect, useState, createContext } from 'react';
//import { cartContext } from '../App';


export const cartContext = createContext(undefined);

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCartFromLocalStorage(); 
  }, []);  
  
  function addToCart(item){
    let newCart = [];

    if ( isInCart(item.id) ) {      
      newCart = cart.reduce((previous, currentItem) => {
        if(item.id !== currentItem.id) {
          return previous.concat(currentItem);
        } else {
          return previous.concat({ ...currentItem, quantity: currentItem.quantity + item.quantity});
        }
      }, []);
    } else {
      newCart = cart.concat(item);
    }

    setCart(newCart);
    setCartInLocalStorage(newCart);
  }

  function getCartFromLocalStorage(){
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }

  function isInCart(id){
    return cart.some( product => product.id === id);
  }

  function setCartInLocalStorage( cart ){
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function removeItem(id){
    const newCart = cart.filter( product => product.id !== id );
    setCart(newCart);
    setCartInLocalStorage(newCart);
  }

  function clearCart(){
    setCart([]);
    setCartInLocalStorage([]);
  }

  function cartCount(){
    const initialValue = 0;
    return cart.reduce( (acc, item) => {
      return acc = acc + item.quantity
    }, initialValue);
  }
  
  return (
    <cartContext.Provider value={{cart, addToCart, removeItem, clearCart, cartCount, isInCart}}>
        {children}
    </cartContext.Provider>
  )
}
