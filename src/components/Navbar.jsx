import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-pink-100 bg-linear-to-r from-pink-100 via-pink-200 to-pink-100 p-4 text-white">
      <h1 className="text-2xl font-bold text-pink-800">
        <NavLink to="/" end>
          Platas Floristeria
        </NavLink>
      </h1>
      <NavLink to="/productList" end>
        Product List
      </NavLink>
    </nav>
  );
};
export default Navbar;
