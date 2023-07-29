import { Footer } from 'containers/AllProducts/styles';
import { Link } from 'react-router-dom';

export const FooterContentWeb = () => {
  return (
    <Footer>
      <div>
        <Link to='/'>
          <img
            src='https://acortar.link/m8bSQV'
            alt='logo-home'
            width='100px'
          />
        </Link>
      </div>

      <ul className='list-footer-data'>
        <li>COOKIES</li>
        <li>PRIVACY POLICY</li>
        <li>SHIPPING POLICY</li>
        <li>TERMS OF SERVICE</li>
      </ul>

      <ul className='list-footer-data'>
        <li>CONTACT</li>
        <li>FAQ</li>
        <li>RETURNS</li>
      </ul>
    </Footer>
  );
};
