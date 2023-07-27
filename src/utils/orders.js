
export function getOrderDetails (orderId) {
    return JSON.parse(localStorage.getItem('orders')).find((order) => order.id === orderId);
}

export function getAllOrders () {
    return JSON.parse(localStorage.getItem('orders'));
}

export const totalPrice = JSON.parse(localStorage.getItem('orders')).reduce((total, order) => {
    const price = parseFloat(order.price);
    return total + price;
}, 0);

export function totalAmount(orderId) {
  const orders = JSON.parse(localStorage.getItem('orders'));

  for (const order of orders) {
    const orderProdutcId = order.id;

    if (orderProdutcId === orderId) {
      return orderProdutcId.length;
    }
  }
  return 100;
}