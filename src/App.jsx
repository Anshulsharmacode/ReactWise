import { useState } from 'react';
import products from './data/products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderSummary from './components/OrderSummary';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <main>
      <h1>Laboratory Supply Store</h1>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart cart={cart} />
      <OrderSummary cart={cart} />
    </main>
  );
}

export default App;
