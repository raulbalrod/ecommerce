import { Product } from 'components/Product';
import { productsRandoms } from 'data/productsRandoms';

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export const RandomProducts = () => {
  const shuffledProducts = shuffle(productsRandoms);
  const randomProducts = shuffledProducts.slice(0, 4);

  return randomProducts.map((product) => (
    <Product
      key={product.id}
      src={product.src}
      name={product.name}
      id={product.id}
      price={product.price}
    />
  ));
};
