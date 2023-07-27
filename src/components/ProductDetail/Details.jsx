import { products } from 'data/products';
import { useCart } from 'hooks/useCart';
import { useParams } from 'react-router-dom';

export const DetailsProduct = ({ name, price, id, details }) => {
  const { productId } = useParams();
  const productOrder = products.find((product) => product.id === productId);

  const { addToCart } = useCart();

  return (
    <section className='product-details-data'>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button
        className='add-product-cart'
        value={id}
        onClick={() => addToCart(productOrder)}
      >
        Add to cart
      </button>

      <section className='text-details'>
        <details className='text-details-description'>
          <summary>Description</summary>
          {details}
          <br /> <br />
        </details>

        <details className='text-details-shipping'>
          <summary>Shipping</summary>
          <p>
            PLAZOS DE PRODUCCIÓN Y ENVÍOS <br />
            <br /> Producimos todos tus pedidos en un plazo de 4 a 5 días.
            <br /> <br />
            Nuestros servicios de envío estándar tienen estos días de tránsito
            según destino: Para España península debes contar con 24/48 horas.
            <br /> <br />
          </p>
        </details>
      </section>
    </section>
  );
};
