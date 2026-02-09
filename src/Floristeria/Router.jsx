import { createBrowserRouter } from "react-router";
import App from "./App";
import { ROUTES } from "../globals.js";
import HomePage from "./HomePage/Pages/HomePage";
import FlowersListPage from "../Floristeria/Inventary/Pages/FlowersListPage.jsx";

const CalculatorPage = () => <h1>Calculator</h1>;
const HistoryPage = () => <h1>History</h1>;

export const router = createBrowserRouter([
  {
    Component: App,
    path: ROUTES.HOME,
    children: [
      { index: true, Component: HomePage },
      { path: ROUTES.PRODUCT_LIST, Component: FlowersListPage },
      { path: ROUTES.CALCULATOR, Component: CalculatorPage },
      { path: ROUTES.HISTORY, Component: HistoryPage },
    ],
  },
]);
