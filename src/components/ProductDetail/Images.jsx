import { getProductDetails } from 'utils/products';
import { ImagesProduct } from './ImagesProduct';

export const ImagesDetailsProduct = ({ id, src }) => {
  const product = getProductDetails(id);
  return (
    <section className='product-details-image'>
      <img src={src} className='image-product-details' alt='product' />
      <section>
        {product.images.map((image, index) => (
          <ImagesProduct key={index} src={image} />
        ))}
      </section>
    </section>
  );
};
