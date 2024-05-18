import SearchBar from "./SearchBar";
import NavItem from "./NavItem";

function Navbar() {
  
  return (
    <nav className="flex items-center w-full gap-20 py-5 mx-auto justify-evenly bg-primary">
      <div className="flex justify-between gap-10">
      <img className="w-auto h-10" src="/src/assets/img/logo.png" alt="" />
      <SearchBar placeholder="Search..." />
    </div>
      <NavItem/>
    </nav>
  )
}

export default Navbar