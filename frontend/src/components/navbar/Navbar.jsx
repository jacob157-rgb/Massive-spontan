import { useState } from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 mx-auto bg-primary lg:px-32">
      <div className="flex items-center flex-1 gap-4 lg:gap-10">
      <Link to="/"><img className="w-auto h-7 lg:h-10" src="/src/assets/img/logo.png" alt="Logo" /></Link>
        <div className="flex-1 hidden mr-4 md:block lg:mr-10">
          <SearchBar placeholder="Search..." />
        </div>
      </div>
      <div className="hidden md:flex">
        <Navigation />
      </div>
      <div className="md:hidden">
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 z-10 p-4 top-[60px] bg-primary md:hidden">
          <Navigation />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
