function SearchBar() {
  return (
    <form>
      <div class="relative flex">
        <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
        placeholder="Search"
          type="search"
          id="default-search"
          class="block w-full p-4 text-sm text-gray-900 border border-gray-300 ps-10 rounded-xl bg-gray-50 focus:ring-blue-200 focus:border-blue-200"
        />
        {/* <button type="reset" class="absolute pr-5 end-20 bottom-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button> */}
        {/* <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary focus:bg-red-800 rounded-lg text-sm px-4 py-2">
          Cari
          <i class="bi bi-arrow-right-circle"></i>
        </button> */}
      </div>
    </form>
  );
}

export default SearchBar;
