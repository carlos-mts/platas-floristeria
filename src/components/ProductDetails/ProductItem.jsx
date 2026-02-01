import { useState } from "react";
import ProductEdit from "./ProductEdit";
import ProductView from "./ProductView";

const ProductItem = ({ product, onSave, onCancel }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [priceDraft, setPriceDraft] = useState(product.price);

	const handleEdit = () => {
		setPriceDraft(product.price);
		setIsEditing(true);
	};

	const handleSave = () => {
		onSave({
			...product,
			price: priceDraft,
		});
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		setPriceDraft(product.price);
		setIsEditing(false);
	};

	return isEditing ? (
		<ProductEdit
			product={product}
			price={priceDraft}
			onPriceChange={setPriceDraft}
			onSave={handleSave}
			onCancel={handleCancelEdit}
		/>
	) : (
		<ProductView
			product={product}
			onEdit={handleEdit}
		/>
	);
};

export default ProductItem;
