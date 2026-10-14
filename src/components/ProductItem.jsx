function ProductItem({ product, onAddToCart }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </li>
  );
}

export default ProductItem;
