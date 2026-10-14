import ProductItem from './ProductItem';

function ProductList({ products, onAddToCart }) {
  return (
    <section>
      <h2>Product Catalog</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
