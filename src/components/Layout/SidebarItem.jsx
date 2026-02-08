import { NavLink } from "react-router";

const SidebarItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      px-3 py-2 rounded-xl cursor-pointer text-sm transition
      ${
        isActive
          ? "bg-white font-medium text-stone-800 shadow-sm"
          : "text-stone-600 hover:bg-white/60"
      }
    `}
  >
    {children}
  </NavLink>
);

export default SidebarItem;
