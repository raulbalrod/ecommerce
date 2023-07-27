import { CollectionsHome } from 'components/Collection/collectionsHome';
import { FooterContentWeb } from 'components/struture/footerEcommerce';
import { collections } from 'data/collections';
import { RandomProducts } from 'components/randomProducts';
import confetti from 'canvas-confetti';
import { HeaderContent } from 'components/struture/header';
import { Footer } from 'components/struture/footerProject';

const { RandomProductsStyle } = require('containers/AllProducts/styles');

function Home() {
  const handleClick = () => {
    confetti();
  };

  return (
    <div>
      <HeaderContent />

      <section>
        <video
          width='100%'
          autoPlay
          loop
          playsInline
          src='https://cdn.shopify.com/videos/c/o/v/ba8bcbb5b47a4c9d808687c629998409.mp4'
        >
          <source
            src='https://cdn.shopify.com/videos/c/o/v/ba8bcbb5b47a4c9d808687c629998409.mp4'
            type='video/mp4'
          ></source>
        </video>
      </section>

      <section className='collections-v2'>
        {collections.map((collection) => (
          <CollectionsHome
            key={collection.id}
            src={collection.src}
            name={collection.name}
            id={collection.id}
            price={collection.price}
          />
        ))}
      </section>

      <hr style={{ background: 'black', width: '70%' }} />

      <section>
        {/* Slider products */}
        <RandomProductsStyle>
          <RandomProducts />
        </RandomProductsStyle>
      </section>

      <hr />

      <section className='join-us-section'>
        <img src='https://acortar.link/ejdJHu' alt='img-join-us' />
        <div>
          <span>JOIN US IN THE</span>
          <h1>FAKE GODS COMMUNITY</h1>
          <button onClick={handleClick}>JOIN US</button>
        </div>
      </section>

      <FooterContentWeb />
      <Footer />
    </div>
  );
}
export default Home;
