// import { useFloreriaStore } from '../../store/floreriaStore.js';
import { useNavigate } from "react-router";
import DashboardCard from "../Components/DashboardCard.jsx";
import { ROUTES } from "../../../globals.js";
import PageHeader from "../../Layout/PageHeader.jsx";

const HomePage = () => {
	// const { products } = useFloreriaStore();
	const navigate = useNavigate();

	return (
		<>
			{/* Cards */}
			<PageHeader title="Dashboard" description="Bienvenido al panel de control de tu floristería" />
			<section className="grid grid-cols-3 gap-8">
				<DashboardCard
					title="Gestión de inventario"
					description="Gestiona y controla el stock de tus flores"
					cta="Ver inventario"
					to={ROUTES.PRODUCT_LIST}
				/>
				<DashboardCard
					title="Calculadora"
					description="Calcula el costo y precio de las flores"
					cta="Abrir calculadora"
					to={ROUTES.CALCULATOR}
				/>
				<DashboardCard
					title="Historial"
					description="Revisa tus registros y ventas anteriores"
					cta="Ver historial"
					to={ROUTES.HISTORY}
				/>
			</section>

		</>
	)
}

export default HomePage;