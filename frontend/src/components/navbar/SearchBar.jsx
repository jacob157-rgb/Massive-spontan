function SearchBar({ placeholder }) {
  return (
    <div className="relative text-gray-600">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-5 pr-10 text-sm bg-white rounded-sm h-11 focus:outline-none"
      />
      <button type="submit" className="absolute -top-0.5 right-0 mt-3 mr-4">
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}

export default SearchBar;
