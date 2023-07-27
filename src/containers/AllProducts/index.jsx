import { Product } from 'components/Product';
import { getAllProducts } from 'utils/products';
import { ProductsList } from './styles';

import { useParams } from 'react-router-dom';
import { FooterContentWeb } from 'components/struture/footerEcommerce';
import { HeaderContent } from 'components/struture/header';
import { Footer } from 'components/struture/footerProject';

function AllProducts() {
  const { productId } = useParams();

  const products = getAllProducts(productId);

  return (
    <div>
      <HeaderContent />

      {/* <Loader $isLoading /> */}
      <h3 className='h3-title'>OUR PRODUTCS</h3>

      <ProductsList>
        {products.map((product) => (
          <Product
            key={product.id}
            src={product.src}
            name={product.name}
            id={product.id}
            price={product.price}
          />
        ))}
      </ProductsList>

      <FooterContentWeb />

      <Footer />
    </div>
  );
}

export default AllProducts;
