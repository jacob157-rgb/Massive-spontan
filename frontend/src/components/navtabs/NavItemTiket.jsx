import { NavLink } from "react-router-dom";

function NavTabsItem({ label }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "p-2 md:p-3 lg:p-4 border-b-4 border-secondary"
          : "p-2 md:p-3 lg:p-4 hover:border-b-4 border-b-4 font-extralight hover:font-normal border-transparent hover:border-secondary"
      }>
      <h1 className="flex text-white">{label}</h1>
    </NavLink>
  );
}

function Navigation() {
  return (
    <div className="flex space-x-4 md:space-x-0 flex-nowrap justify-start w-full md:w-auto overflow-x-auto">
      <NavTabsItem label="Tiket" />
      <NavTabsItem label="Deskripsi" />
      <NavTabsItem label="Fasilitas" />
      <NavTabsItem label="Ulasan" />
    </div>
  );
}

export default Navigation;