// import { NavLink } from "react-router";

import { NavLink } from "react-router";
import SidebarItem from "./SidebarItem";
import { ROUTES } from "../../constants";

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 bg-sidebar border-r border-soft px-4 py-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 px-2 h-16 mb-6 border-b border-gray-200">
          <NavLink
            to={ROUTES.HOME}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
          >
            <div className="h-8 w-8 rounded-full bg-emerald-600/20" />
            <span className="font-medium text-stone-700">
              Floreria Admin
            </span>
          </NavLink>
        </div>

        {/* Menu */}
        <nav className="space-y-1 flex flex-col">
          <SidebarItem to={ROUTES.HOME}>Inicio</SidebarItem>
          <SidebarItem to={ROUTES.PRODUCT_LIST}>Inventario</SidebarItem>
          <SidebarItem to={ROUTES.CALCULATOR}>Calculadora</SidebarItem>
          <SidebarItem to={ROUTES.HISTORY}>Historial</SidebarItem>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
