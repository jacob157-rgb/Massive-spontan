import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="flex py-8 bg-primary">
      <img className="" src="/src/assets/img/logo.png" alt="" />
      <SearchBar/>
    </nav>
  )
}

export default Navbar