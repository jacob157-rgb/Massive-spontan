import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../components/misc/AuthButton";
import SocialButton from "../../components/misc/SocialButton";
import StraightTrough from "../../components/misc/StraightTrough";

function Register() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex bg-g1">
        <img
          className="self-center w-1/2 h-auto mx-auto"
          src="/src/assets/img/logo.png"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col justify-center px-10 space-y-2 bg-white md:p-32 md:space-y-4">
        <h1 className="mb-3 text-3xl font-bold md:mb-5 md:text-4xl">Daftar</h1>
        <form className="w-full max-w-md mx-auto">
          <label
            htmlFor="email-address-icon"
            className="block mb-1 font-medium md:mb-2">
            Username
          </label>
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-400 material-symbols-outlined">
                person
              </span>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="block w-full p-2 md:p-3.5 pl-12 border-2 border-c1b"
              placeholder="username"
            />
          </div>
          <label
            htmlFor="email-address-icon"
            className="block mb-1 font-medium md:mb-2">
            Email
          </label>
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-400 material-symbols-outlined">
                mail
              </span>
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="block w-full p-2 md:p-3.5 pl-12 border-2 border-c1b"
              placeholder="email@email.com"
            />
          </div>
          <label
            htmlFor="password-icon"
            className="block mb-1 font-medium md:mb-2">
            Kata Sandi
          </label>
          <div className="relative mb-3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-400 material-symbols-outlined">
                lock
              </span>
            </div>
            <input
              type="password"
              id="password-icon"
              className="block w-full p-2 md:p-3.5 pl-12 border-2 border-c1b"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
          <label
            htmlFor="password-icon"
            className="block mb-1 font-medium md:mb-2">
            Konfirmasi Kata Sandi
          </label>
          <div className="relative mb-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-400 material-symbols-outlined">
                lock
              </span>
            </div>
            <input
              type="password"
              id="password-icon"
              className="block w-full p-2 md:p-3.5 pl-12 border-2 border-c1b"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
          <AuthButton link="/register" label="Daftar" />
        </form>
        <p className="text-sm">
          Mempunyai akun?{" "}
          <Link className="text-primary" to="/login">
            Masuk Disini
          </Link>
        </p>
        <StraightTrough label="Atau daftar menggunakan" />
        <SocialButton
          icon="/src/assets/icons/google.svg"
          label="Daftar dengan Google"
        />
      </div>
    </div>
  );
}

export default Register;
