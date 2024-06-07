import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthButton from "../../components/misc/AuthButton";
import SocialButton from "../../components/misc/SocialButton";
import StraightTrough from "../../components/misc/StraightTrough";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi formulir
    if (!email.trim()) {
      toast.error("Email harus diisi");
      return;
    }

    if (!password.trim()) {
      toast.error("Kata sandi harus diisi");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");
      toast.success("Login Berhasil!");
    } catch (err) {
      setError(err.response.data.message || "Terjadi kesalahan.");
      toast.error(err.response.data.message || "Terjadi kesalahan.");
    }
  };

  return (
    <>
      <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="flex bg-g1">
          <Link className="self-center w-1/2 h-auto mx-auto" to="/">
            <img src="/src/assets/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex flex-col justify-center px-10 space-y-2 bg-white md:p-20 md:space-y-4">
          <h1 className="mb-3 text-3xl font-bold md:mb-5 md:text-4xl">Masuk</h1>
          <form onSubmit={handleSubmit} className="w-full mx-auto">
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email-address-icon"
                className="block w-full px-3 py-2 border-2 ps-12 border-c1b"
                placeholder="email@email.com"
              />
            </div>
            <label
              htmlFor="password-icon"
              className="block mb-1 font-medium md:mb-2">
              Kata Sandi
            </label>
            <div className="relative mb-5">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-400 material-symbols-outlined">
                  lock
                </span>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password-icon"
                className="block w-full px-3 py-2 border-2 ps-12 border-c1b"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
            </div>
            <AuthButton type="submit" label="Masuk" />
          </form>
          <p className="text-sm">
            Tidak punya akun?{" "}
            <Link className="text-primary" to="/register">
              Daftar Disini
            </Link>
          </p>
          <StraightTrough label="Atau masuk menggunakan" />
          <SocialButton
            icon="/src/assets/icons/google.svg"
            label="Masuk dengan Google"
          />
        </div>
      </div>
      <div className="absolute">
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
