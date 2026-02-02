// import { useFloreriaStore } from '../../store/floreriaStore.js';
import { useNavigate } from "react-router";
import DashboardCard from "../../components/HomePage/DashboardCard.jsx";


const HomePage = () => {
	// const { products } = useFloreriaStore();
	const navigate = useNavigate();

	return (
		<>

			<header className="mb-10">
				<h1 className="text-2xl font-medium text-stone-800">
					Dashboard
				</h1>
				<p className="text-stone-500 mt-1">
					Bienvenido administrador
				</p>
			</header>

			{/* Cards */}
			<section className="grid grid-cols-3 gap-8">
				<DashboardCard
					title="Gestión de inventario"
					description="Gestiona y controla el stock de tus flores"
					cta="Ver inventario"
				/>
				<DashboardCard
					title="Calculadora"
					description="Calcula el costo y precio de las flores"
					cta="Abrir calculadora"
				/>
				<DashboardCard
					title="Historial"
					description="Revisa tus registros y ventas anteriores"
					cta="Ver historial"
				/>
			</section>

		</>
	)
}

export default HomePage;