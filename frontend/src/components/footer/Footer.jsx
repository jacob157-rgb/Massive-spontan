import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.png"; // Sesuaikan path dengan lokasi logo Anda

function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const toggleDropdown = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <>
      <footer className="px-4 py-10 text-white bg-primary lg:px-32">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
          <div>
            <h1
              className="mb-4 text-lg font-bold cursor-pointer lg:cursor-default"
              onClick={() => toggleDropdown(setIsAboutOpen)}>
              Tentang Spotix
            </h1>
            <ul className={`lg:block ${isAboutOpen ? "block" : "hidden"}`}>
              <li className="mb-2">
                <Link to="/about" className="text-white">
                  Masuk
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing" className="text-white">
                  Biaya
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="text-white">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-white">
                  Syarat dan Ketentuan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1
              className="mb-4 text-lg font-bold cursor-pointer lg:cursor-default"
              onClick={() => toggleDropdown(setIsCategoryOpen)}>
              Kategori
            </h1>
            <ul className={`lg:block ${isCategoryOpen ? "block" : "hidden"}`}>
              <li className="mb-2">
                <Link to="/category/concerts" className="text-white">
                  Konser
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category/sports" className="text-white">
                  Olahraga
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category/festivals" className="text-white">
                  Festival
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/category/workshops" className="text-white">
                  Workshop dan Seminar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1
              className="mb-4 text-lg font-bold cursor-pointer lg:cursor-default"
              onClick={() => toggleDropdown(setIsLocationOpen)}>
              Lokasi Event
            </h1>
            <ul className={`lg:block ${isLocationOpen ? "block" : "hidden"}`}>
              <li className="mb-2">
                <Link to="/locations/jakarta" className="text-white">
                  Jakarta
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/locations/bandung" className="text-white">
                  Bandung
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/locations/yogyakarta" className="text-white">
                  Yogyakarta
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/locations/surabaya" className="text-white">
                  Surabaya
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/locations/medan" className="text-white">
                  Medan
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/locations/bali" className="text-white">
                  Bali
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/locations/all" className="text-white">
                  Semua Kota
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1
              className="mb-4 text-lg font-bold cursor-pointer lg:cursor-default"
              onClick={() => toggleDropdown(setIsSupportOpen)}>
              Spotix Support
            </h1>
            <ul className={`lg:block ${isSupportOpen ? "block" : "hidden"}`}>
              <li className="mb-2">
                <Link to="/contact" className="text-white">
                  Email
                </Link>
              </li>
              <li className="mb-2">
                <Link to="mailto:Spotix01@gmail.com" className="text-white">
                  Spotix01@gmail.com
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <img src={logo} alt="Spotix Logo" className="w-32 lg:w-64" />
              <ul className="flex justify-start mt-5 space-x-3">
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/Instagram.png"
                      alt="Instagram"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/TwitterX.png"
                      alt="TwitterX"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/LinkedIn.png"
                      alt="LinkedIn"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/YouTube.png"
                      alt="YouTube"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/Facebook.png"
                      alt="Facebook"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/TikTok.png"
                      alt="TikTok"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      src="/src/assets/img/social/Link.png"
                      alt="Link"
                      className="w-6 h-auto"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="py-4 text-center text-white border-t border-white bg-primary">
          <p>© 2024 Spotix. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
