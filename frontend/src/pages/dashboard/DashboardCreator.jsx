import { useState } from "react";
import Select from "react-select";
import Footer from "../../components/footer/Footer";
import TextUnderline from "../../components/misc/TextUnderline";
import Navbar from "../../components/navadmin/Navbar";

function DashboardCreator() {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        {/* Sidebar */}
        <div
          className={`flex flex-col flex-none h-screen pt-12 px-6 shadow-md transition-width duration-300 ${
            isSidebarMinimized ? "w-20" : "w-72"
          }`}>
          <div className="flex items-center justify-between pl-6 pr-2">
            <h2
              className={`text-xl font-bold transition-opacity duration-300 ${
                isSidebarMinimized ? "opacity-0" : "opacity-100"
              }`}>
              Dashboard
            </h2>
            <button
              className="p-3 bg-blue-500 z-10 text-white rounded-full focus:outline-none"
              onClick={toggleSidebar}>
              {isSidebarMinimized ? ">" : "<"}
            </button>
          </div>
          <div className="space-y-3 mt-5">
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-lg font-normal">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      house
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      description
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Event Saya
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      calendar_add_on
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Buat Event
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <h2
                className={`text-xl font-bold transition-opacity duration-300 ${
                  isSidebarMinimized ? "opacity-0" : "opacity-100"
                }`}>
                Profile
              </h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-lg font-normal">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      account_circle
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Informasi Akun
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      folder
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Informasi Legal
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      wallet
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Rekening
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <h2
                className={`text-xl font-bold transition-opacity duration-300 ${
                  isSidebarMinimized ? "opacity-0" : "opacity-100"
                }`}>
                Akun
              </h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-lg font-normal">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600 hover:bg-highlight hover:text-white">
                    <span className="material-symbols-outlined hover:text-white">
                      sync
                    </span>
                    <span
                      className={`flex-none transition-opacity duration-300 ${
                        isSidebarMinimized ? "opacity-0" : "opacity-100"
                      }`}>
                      Beralih Akun
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 px-32 pt-12 ${
            isSidebarMinimized ? "ml-20" : "ml-72"
          }`}>
          <div className="mb-5">
            <TextUnderline label="Menampilkan 1 - 234 dari total 1000 public events" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-3 pl-2">
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/anggun.png"
                alt=""
              />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/anggun.png"
                alt=""
              />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/anggun.png"
                alt=""
              />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/anggun.png"
                alt=""
              />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardCreator;
