import { NavLink } from "react-router-dom";

function NavTabsItem({ label }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "p-4 border-b-4 border-secondary"
          : "p-4 hover:border-b-4 border-b-4 font-extralight hover:font-normal border-transparent hover:border-secondary"
      }>
      <h1 className="flex text-white">{label}</h1>
    </NavLink>
  );
}

function Navigation() {
  return (
    <div className="flex w-auto">
      <NavTabsItem label="Konser" />
      <NavTabsItem label="Olahraga" />
      <NavTabsItem label="Festival" />
      <NavTabsItem label="Workshop/Seminar" />
    </div>
  );
}

export default Navigation;
