import React from 'react';
import AuthButton from "../../components/misc/AuthButton";
import SocialButton from "../../components/misc/SocialButton";
import StraightTrough from "../../components/misc/StraightTrough";

function Auth() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex bg-g1">
        <img className="self-center w-1/2 mx-auto h-auto" src="/src/assets/img/logo.png" alt="Logo" />
      </div>
      <div className="flex flex-col justify-center px-10 md:p-12 space-y-2 md:space-y-4 bg-white">
        <AuthButton link="/login" label="Masuk" />
        <AuthButton link="/register" label="Daftar" />
        <StraightTrough label="Atau lanjutkan menggunakan" />
        <SocialButton icon="/src/assets/icons/google.svg" label="Lanjutkan dengan Google" />
      </div>
    </div>
  );
}

export default Auth;