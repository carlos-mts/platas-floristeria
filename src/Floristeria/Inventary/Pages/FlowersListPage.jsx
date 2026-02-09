import { Link } from "react-router";
import ProductDetails from "../Components/index.jsx";
import PageHeader from "../../Layout/PageHeader.jsx";

const FlowersListPage = () => {
  return (
    <>
      <PageHeader
        title="Inventario de flores"
        description="Gestiona y controla el stock de tus flores"
        actions={
          <Link
            to="/"
            className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-5 py-2 rounded-xl transition"
          >
            + Agregar flor
          </Link>
        }
      />
      <ProductDetails />
    </>
  );
}
export default FlowersListPage;
