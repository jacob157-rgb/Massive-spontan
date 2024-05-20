import SearchBar from "./SearchBar";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-32 py-5 mx-auto bg-primary">
      <div className="flex items-center flex-1 gap-10">
        <img className="w-auto h-10" src="/src/assets/img/logo.png" alt="" />
        <div className="flex-1 mr-10">
          <SearchBar placeholder="Search..." />
        </div>
      </div>
      <NavItem className="w-50" />
    </nav>
  );
}

export default Navbar;
