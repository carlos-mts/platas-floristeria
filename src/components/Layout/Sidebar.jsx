// import { NavLink } from "react-router";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 bg-sidebar border-r border-soft px-4 py-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 mb-6">
          <div className="h-8 w-8 rounded-full bg-emerald-600/20" />
          <span className="font-medium text-stone-700">
            Floreria Admin
          </span>
        </div>

        {/* Menu */}
        <nav className="space-y-1">
          <SidebarItem active>Inicio</SidebarItem>
          <SidebarItem>Inventario</SidebarItem>
          <SidebarItem>Calculadora</SidebarItem>
          <SidebarItem>Historial</SidebarItem>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
