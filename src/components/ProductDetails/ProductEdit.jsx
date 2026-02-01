const ProductEdit = ({
  product,
  price,
  onPriceChange,
  onSave,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow product-item edit-mode">
      <div>
        <strong className="text-lg">{product.name}</strong>
      </div>
      <div className="mt-2">
        <label className="block">
          Precio: $
          <input
            type="number"
            value={price}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="border p-1 w-full mt-1"
          />
        </label>
      </div>
      <div className="actions mt-4">
        <button onClick={onSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Save
        </button>
        <button onClick={onCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProductEdit;
