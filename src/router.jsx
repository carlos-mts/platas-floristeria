import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import { ROUTES } from "./constants";

const CalculatorPage = () => <h1>Calculator</h1>;
const HistoryPage = () => <h1>History</h1>;

export const router = createBrowserRouter([
  {
    Component: App,
    path: ROUTES.HOME,
    children: [
      { index: true, Component: HomePage },
      { path: ROUTES.PRODUCT_LIST, Component: ProductListPage },
      { path: ROUTES.CALCULATOR, Component: CalculatorPage },
      { path: ROUTES.HISTORY, Component: HistoryPage },
    ],
  },
]);
