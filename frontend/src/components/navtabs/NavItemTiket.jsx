import { NavLink } from "react-router-dom";

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "p-2 md:p-3 lg:p-4 border-b-4 border-secondary"
          : "p-2 md:p-3 lg:p-4 hover:border-b-4 border-b-4 font-extralight hover:font-normal border-transparent hover:border-secondary"
      }
    >
      <h1 className="flex text-white">{label}</h1>
    </NavLink>
  );
}

function Navigation() {
  return (
    <div className="flex justify-start w-full space-x-4 overflow-x-auto md:space-x-0 flex-nowrap md:w-auto">
      <NavItem to="/event/tiket" label="Tiket" />
      <NavItem to="/event/description" label="Deskripsi" />
      <NavItem to="/event/facility" label="Fasilitas" />
      <NavItem to="/event/ratings" label="Ulasan" />
    </div>
  );
}

export default Navigation;
