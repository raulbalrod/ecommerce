import confetti from 'canvas-confetti';
import './Cart.css';
import { CartIcon } from 'components/Icons';
import { useCart } from 'hooks/useCart';

function CartItem({ src, price, name, quantity, removeFromCart }) {
  return (
    <div className='deatils-cart'>
      <div className='cart-details-left'>
        <img src={src} alt='img-cart' width='160px' />
      </div>

      <div className='cart-details-right'>
        <div>
          <strong>{name}</strong>
          <p>{price}</p>
        </div>

        <div>
          <button className='delete-order' onClick={removeFromCart}>
            Retirar
          </button>
        </div>

        <footer>
          <p>Quantity: {quantity}</p>
        </footer>
      </div>
    </div>
  );
}

export function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const cartCheckboxId = 'cart-checkbox';

  const handleClick = () => {
    clearCart();
    confetti();
  };

  const uniqueProducts = cart.reduce((uniqueList, product) => {
    const existingProduct = uniqueList.find((item) => item.id === product.id);
    if (!existingProduct) {
      uniqueList.push(product);
    }
    return uniqueList;
  }, []);

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        {uniqueProducts.map((product) => (
          <CartItem
            key={product.id}
            src={product.src}
            id={product.id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            removeFromCart={() => removeFromCart(product.id)}
          />
        ))}

        <button className='add-product-checkout' onClick={handleClick}>
          CHECKOUT
        </button>
      </aside>
    </>
  );
}
