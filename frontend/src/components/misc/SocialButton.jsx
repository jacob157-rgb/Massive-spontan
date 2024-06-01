function SocialButton({ icon, label }) {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  
  return (
    <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full h-auto p-2 text-center border-2 rounded-sm md:p-3 md:text-lg">
      <img className="w-8 h-8 mr-2" src={icon} alt="icon" />
      {label}
    </button>
  );
}

export default SocialButton;