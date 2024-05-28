function SocialButton({ icon, label }) {
  return (
    <button className="flex items-center justify-center w-full h-auto p-2 md:p-3 md:text-lg text-center border-2 rounded-sm">
      <img className="w-8 h-8 mr-2" src={icon} alt="icon" />
      {label}
    </button>
  );
}

export default SocialButton;