import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 mx-auto bg-primary lg:px-32">
      <div className="flex items-center flex-1 gap-4 lg:gap-10">
        <Link to="/">
          <img
            className="w-auto h-7 lg:h-10"
            src="/src/assets/img/logo.png"
            alt="Logo"
          />
        </Link>
        <div className="w-full bg-white py-5">
          <p>Dashboard</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
