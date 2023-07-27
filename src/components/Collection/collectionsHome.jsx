import { Link } from 'react-router-dom';

export const CollectionsHome = ({ src, name, id }) => {
  return (
    <Link to={`/collection/${id}`} style={{ textDecoration: 'none' }}>
      <div className='collection'>
        <div>
          <img
            src={src}
            alt='product'
            className='image-collection'
            width='400px'
            height='500px'
          />
        </div>
        <span className='name-collection'>{name}</span>
      </div>
    </Link>
  );
};
