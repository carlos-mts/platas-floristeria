import { Outlet, useLocation } from "react-router";
import 'modern-normalize/modern-normalize.css';
import Breadcrumbs from "../Floristeria/Layout/Breadcrumbs";
import Show from "../shared/components/Show";
import Sidebar from "./layout/Sidebar";
import './App.css'

const App = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex bg-main ">
      <Sidebar />
      <main className="flex-1 px-4 py-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App
