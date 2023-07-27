import { Collection } from 'components/Collection/Collection';
import { FooterContentWeb } from 'components/struture/footerEcommerce';
import { Footer } from 'components/struture/footerProject';
import { HeaderContent } from 'components/struture/header';
import { collections } from 'data/collections';

function Collections() {
  return (
    <div>
      <HeaderContent />

      <h3 className='h3-title' style={{ marginBottom: '32px' }}>
        OUR COLLECTIONS
      </h3>

      <section className='collections'>
        {collections.map((collection) => (
          <Collection
            key={collection.id}
            src={collection.src}
            name={collection.name}
            id={collection.id}
            price={collection.price}
          />
        ))}
      </section>

      <FooterContentWeb />
      <Footer />
    </div>
  );
}

export default Collections;
