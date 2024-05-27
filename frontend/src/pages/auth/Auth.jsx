import React from 'react'
import AuthButton from "../../components/misc/AuthButton";
import SocialButton from "../../components/misc/SocialButton";
import StraighTrough from "../../components/misc/StraightTrough";

function Auth() {
  return (
    <div className='grid h-screen grid-cols-2'>
      <div className='flex bg-g1'>
          <img className='self-center w-auto mx-auto h-1/6' src="/src/assets/img/logo.png" alt="" />
      </div>
      <div className='self-center p-12 space-y-2 bg-white'>
        <AuthButton label="Masuk"/>
        <AuthButton label="Daftar"/>
        <StraighTrough label="Atau lanjutkan menggunakan"/>
        <SocialButton icon="/src/assets/icons/google.svg" label="Lanjutkan dengan Google"/>
      </div>
    </div>
  )
}

export default Auth