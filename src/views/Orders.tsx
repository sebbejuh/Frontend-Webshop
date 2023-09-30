import productsJSON from '../fake-db/products.json'
import { useState } from 'react';

const Orders = () => {
  const products: (ProductInterface | ExtendedProductInterface)[] = productsJSON.products; //creates products variable to hold the products array from the JSON file
  // get the orders from localStorage
  const [orders, setOrders] = useState<Order[]>(
    JSON.parse(localStorage.getItem('orders') || '[]')
  );
// Function to remove an order by index
const removeOrder = (index: number) => {
  const updatedOrders = [...orders];
  updatedOrders.splice(index, 1);
  setOrders(updatedOrders);
  localStorage.setItem('orders', JSON.stringify(updatedOrders));
};
const formatDate = (dateString: string) => {
  const utcDate = new Date(dateString);
  const swedishDate = new Date(utcDate.toLocaleString('en-US', { timeZone: 'CET' }));
  return swedishDate.toLocaleString('sv-SE');
};

return (
  <section className="orders">
    <h1>Ordrar</h1>
    <ul className="order-list">
      {orders.map((order, index) => (
        <li key={index}>
          <p>Datum: {formatDate(order.date)}</p>
          <ul>
            {Object.keys(order.cart).map((productId) => {
              const product = products.find((p) => p.id === parseInt(productId));
              if (product && order.cart[productId] !== 0) {
                return (
                  <li key={productId}>
                    {order.cart[productId]} {product.name}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <button onClick={() => removeOrder(index)}>Ta bort order</button>
        </li>
      ))}
    </ul>
  </section>
  )
}

export default Orders