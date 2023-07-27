import React, { useState } from 'react';
import { products } from 'data/products';
import { DetailsProduct } from './DetailsProduct';

export const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productOrder) => {
    setCart((prevCart) => [...prevCart, productOrder]);
  };

  return (
    <div>
      {products.map((product) => (
        <DetailsProduct
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          details={product.details}
          onAddToCart={handleAddToCart}
        />
      ))}
      {/* You can also render the cart here or in a separate component */}
    </div>
  );
};
