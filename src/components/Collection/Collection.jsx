import { Link } from 'react-router-dom';

export const Collection = ({ src, name, id }) => {
  return (
    <Link to={`/collection/${id}`} style={{ textDecoration: 'none' }}>
      <div className='collection'>
        <div>
          <img
            src={src}
            alt='product'
            className='image-collection'
            width='500px'
            height='650px'
          />
        </div>
        <span className='name-collection'>{name}</span>
      </div>
    </Link>
  );
};
