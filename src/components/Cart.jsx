import CartItem from './CartItem';

function Cart({ cart }) {
  return (
    <section>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
