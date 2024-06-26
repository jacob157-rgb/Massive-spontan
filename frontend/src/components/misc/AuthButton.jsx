import { useNavigate } from "react-router-dom";

function AuthButton({ label, link, type }) {
  const navigate = useNavigate();

  return (
    <button type={type} onClick={() => navigate(link)} className="w-full h-auto px-2 py-2 text-lg font-normal text-center text-white rounded-sm md:p-3 bg-secondary">
      {label}
    </button>
  );
}

export default AuthButton;
