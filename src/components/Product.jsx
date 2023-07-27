import { Link } from 'react-router-dom';

export const Product = ({ src, name, id, price }) => {
  return (
    <div className='product'>
      <Link to={`/product/${id}`}>
        <img src={src} alt='product' className='image-product' width='300px' />
      </Link>
      <h2>{name}</h2>
      <h4>{price}</h4>
    </div>
  );
};
