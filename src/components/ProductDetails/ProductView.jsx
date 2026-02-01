const ProductView = ({ product, onEdit }) => {
  const pricePerFlower = (product.basePrice / product.packageSize).toFixed(2);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full flex flex-col md:flex-row border border-gray-200">
      <div className="bg-white rounded-xl p-4 w-full flex flex-col md:flex-row gap-3 border border-gray-200">

        <div className="shrink-0">
          <img
            src={product.img}
            alt={product.name}
            className="w-36 object-cover rounded-lg h-full"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            {product.isActive && (
              <span className="text-green-600 font-medium flex items-center gap-1">
                <span className="w-3 h-3 bg-green-600 rounded-full inline-block"></span> Activo
              </span>
            )}
          </div>

          <div className="mt-2">
            <p className="text-xl font-bold text-gray-900">${product.basePrice} <span className="text-gray-500 text-base">/paquete</span></p>
            <p className="text-gray-500 text-sm">≈ ${pricePerFlower} por flor</p>
          </div>

          <ul className="mt-4 text-gray-600 space-y-1 text-sm">
            <li>📦 Paquete de {product.packageSize} flores</li>
            <li>📦 Stock: {product.stock} disponibles</li>
            <li>🗓 Última edición: {new Date(product.lastUpdated).toLocaleString('es-MX')} por {product.updatedBy}</li>
          </ul>

          <div className="mt-4">
            <button
              onClick={() => onEdit(product.id)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Editar
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductView;
