import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../../components/misc/AuthButton";
import SocialButton from "../../components/misc/SocialButton";
import StraightTrough from "../../components/misc/StraightTrough";

function Auth() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex bg-g1">
        <Link className="self-center w-1/2 h-auto mx-auto" to="/">
          <img src="/src/assets/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="flex flex-col justify-center px-10 space-y-2 bg-white md:p-12 md:space-y-4">
        <AuthButton link="/login" label="Masuk" />
        <AuthButton link="/register" label="Daftar" />
        <StraightTrough label="Atau lanjutkan menggunakan" />
        <SocialButton
          icon="/src/assets/icons/google.svg"
          label="Lanjutkan dengan Google"
        />
      </div>
    </div>
  );
}

export default Auth;
