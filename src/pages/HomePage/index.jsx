// import { useFloreriaStore } from '../../store/floreriaStore.js';
import { useNavigate } from "react-router";
import Button from '../../components/Button.jsx';
import { CREATE_BTN_TEXT, EDIT_BTN_TEXT } from './constants.js';


const HomePage = () => {
	// const { products } = useFloreriaStore();
  const navigate = useNavigate();

	const handleGoToProducList = () => {
		console.log('Edit Products clicked');
		navigate('/productList');
	}

	const handleGoToCalculator = () => {
		console.log('Create Product clicked');
	}

	return (
		<>
			<h2 className="text-xl font-semibold p-4">Bienvenido a Platas Floristeria</h2>

			<Button onClick={handleGoToProducList} className="ml-4">
				{EDIT_BTN_TEXT}
			</Button>

			<Button onClick={handleGoToCalculator} className="ml-4">
				{CREATE_BTN_TEXT}
			</Button>

			{/* <ProductDetails /> */}

			{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
				<Show when={editProducts}>
				</Show>
			</div> */}

			{/* <div>
				<Show when={createProduct}>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
						{products.map(product => (
							<div key={product.id} className="bg-white p-4 rounded shadow">
								add a checkbox to add / select this product
								<input type="checkbox" className="mr-2" />
								<h2 className="text-lg font-bold">{product.name}</h2>
								adaptate al nuevo formato de precio
								<p className="mt-2">Precio: ${product.price}</p>
								add a component to increase the amount of items selected, default 1
								<input type="number" defaultValue={1} min={1} className="border p-1 w-16 mt-2" />
							</div>
						))}
					</div>
				</Show>
			</div> */}
		</>
	)
}

export default HomePage;