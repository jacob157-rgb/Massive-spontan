import { useNavigate } from "react-router-dom";

function AuthButton({ label, link }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(link)} className="w-full h-auto p-2 md:p-4 text-lg font-normal text-center text-white rounded-sm bg-secondary">
      {label}
    </button>
  );
}

export default AuthButton;
