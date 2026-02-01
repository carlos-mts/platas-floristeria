import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      { index: true, Component: HomePage },
      { path: "productList", Component: ProductListPage },
    ],
  },
]);
