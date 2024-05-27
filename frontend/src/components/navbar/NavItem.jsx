import { NavLink } from "react-router-dom";

function NavItem({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "p-3" : "p-3 hover:bg-highlight"
      }
    >
      <h1 className="flex items-center text-white">
        {label}
        <span className="ml-2 material-symbols-outlined">{icon}</span>
      </h1>
    </NavLink>
  );
}

export default NavItem;
