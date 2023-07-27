import { useParams } from 'react-router-dom';
import { getProductDetails } from 'utils/products';
import { RandomProductsStyle } from 'containers/AllProducts/styles';
import { ImagesDetailsProduct } from 'components/ProductDetail/Images';
import { DetailsProduct } from 'components/ProductDetail/Details';
import { FooterContentWeb } from 'components/struture/footerEcommerce';
import { RandomProducts } from 'components/randomProducts';
import { HeaderContent } from 'components/struture/header';
import { Footer } from 'components/struture/footerProject';

function ProductDetail() {
  const { productId } = useParams();

  const product = getProductDetails(productId);

  return (
    <div>
      <HeaderContent />

      <section className='product-details' style={{ marginBottom: '124px' }}>
        <ImagesDetailsProduct id={product.id} src={product.src} />

        <DetailsProduct
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          details={product.details}
        />
      </section>

      <hr style={{ background: 'black', width: '70%' }} />

      <section>
        <RandomProductsStyle>
          <RandomProducts />
        </RandomProductsStyle>
      </section>

      <FooterContentWeb />
      <Footer />
    </div>
  );
}

export default ProductDetail;
