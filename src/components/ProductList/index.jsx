import './ProductList.css';

const ProductList = () => {
  const { products } = useFloreriaStore();
  
  if (!products || products.length === 0) {
    return <div className="product-list-empty">No products available</div>;
  }

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => onProductSelect && onProductSelect(product)}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
