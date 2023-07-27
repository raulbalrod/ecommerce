import { products } from "../data/products";

export function getProductDetails (productId) {
    return products.find((product) => product.id === productId);
}

export function getAllProducts () {
    return products;
}