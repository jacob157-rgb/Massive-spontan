import React from 'react'

function SocialButton({icon, label}) {
  return (
    <button className="flex items-center w-full h-auto p-4 text-lg text-center border-2 rounded-sm"><img className="w-8 h-8 me-2" src={icon}/>{label}</button>
  )
}

export default SocialButton