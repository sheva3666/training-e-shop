import { useState } from "react";

/*

{
  "m@k.cz": [
    product1...
  ],
  "michal@kozubik.cz": [
    product2...
  ]
}
*/

const useCart = (userEmail) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );

  const userCart = cart[userEmail] || [];

  const setCartToLocalStorage = (newItem) => {
    const newCart = {
      ...cart,
      [userEmail]: newItem,
    };
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return [userCart, setCartToLocalStorage];
};

export default useCart;
