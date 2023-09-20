import { Header } from 'containers/AllProducts/styles';
import { Link } from 'react-router-dom';

export const HeaderContent = () => {
  return (
    <Header>
      <Link to='/'>
        <img src='https://acortar.link/m8bSQV' alt='logo-home' width='100px' />
      </Link>

      <div className='nav-menu' id='top'>
        <Link to='/collections/all' style={{ textDecoration: 'none' }}>
          <h3>ALL PRODUCTS </h3>
        </Link>
        <Link to={`/collections`} style={{ textDecoration: 'none' }}>
          <h3>COLLECTIONS</h3>
        </Link>
      </div>
    </Header>
  );
};
