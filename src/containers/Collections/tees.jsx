import { Product } from 'components/Product';
import { FooterContentWeb } from 'components/Structure/footerEcommerce';
import { Footer } from 'components/Structure/footerProject';
import { HeaderContent } from 'components/Structure/header';
import { ProductsList } from 'containers/AllProducts/styles';
import { useParams } from 'react-router-dom';
import { getAllProducts } from 'utils/products';

function Tees() {
  const { productId } = useParams();

  const products = getAllProducts(productId);
  return (
    <div>
      <HeaderContent />

      <section className='collections'>
        <ProductsList>
          {products
            .filter((product) => product.collection === 'tees')
            .map((product) => (
              <Product
                key={product.id}
                src={product.src}
                name={product.name}
                id={product.id}
                price={product.price}
              />
            ))}
        </ProductsList>
      </section>

      <FooterContentWeb />
      <Footer />
    </div>
  );
}

export default Tees;
