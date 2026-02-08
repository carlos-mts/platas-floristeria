import { Outlet, useLocation } from "react-router";
import 'modern-normalize/modern-normalize.css';
import Sidebar from './components/Layout/Sidebar';
import Breadcrumbs from "./components/Layout/Breadcrumbs";
import Show from "./shared/components/Show";
import './App.css'

const App = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <div className="min-h-screen flex bg-main ">
      <Sidebar />

      <main className="flex-1 px-4 py-4">
        <header className="h-16 mb-6 border-b border-gray-200">
          <h1 className="text-2xl font-medium text-stone-800">
            Dashboard
          </h1>
          <p className="text-stone-500 mt-1">
            Bienvenido administrador
          </p>
        </header>
        <Show when={!isHome}>
          <Breadcrumbs />
        </Show>
        <Outlet />
      </main>
    </div>
  );
}

export default App
