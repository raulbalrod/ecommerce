import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('orders')));

  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);

    if (productInCart >= 0) {
      const newCart = cart.map((item, index) => {
        if (index === productInCart) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCart(newCart);
      localStorage.setItem('orders', JSON.stringify(newCart));
    } else {
      const updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];

      setCart(updatedCart);
      localStorage.setItem('orders', JSON.stringify(updatedCart));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('orders', JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
