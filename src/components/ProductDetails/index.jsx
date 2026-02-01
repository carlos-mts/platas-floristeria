import { useFloreriaStore } from "../../store/floreriaStore";
import ProductItem from "./ProductItem";

const ProductDetails = () => {
  const { products } = useFloreriaStore();

  const updateProduct = (updatedProduct) => {
    console.log("Updating product:", updatedProduct);
    useFloreriaStore.getState().updateProduct(updatedProduct);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onSave={(updatedProduct) => updateProduct(updatedProduct)}
          onCancel={() => console.log("Cancel view")}
        />
      ))}
    </div>
  )
};

export default ProductDetails;
