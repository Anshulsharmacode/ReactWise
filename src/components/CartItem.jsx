function CartItem({ item }) {
  const subtotal = item.price * item.quantity;

  return (
    <li>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
    </li>
  );
}

export default CartItem;
