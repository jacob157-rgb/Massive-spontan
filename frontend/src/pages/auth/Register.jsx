import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Croppie from "croppie";
import "croppie/croppie.css";
import AuthButton from "../../components/misc/AuthButton";
import SocialButton from "../../components/misc/SocialButton";
import StraightTrough from "../../components/misc/StraightTrough";

function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [avatarError, setAvatarError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [croppieInstance, setCroppieInstance] = useState(null);

  const navigate = useNavigate();
  const croppieRef = useRef(null);

  const validateStep1 = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Semua bidang wajib diisi.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Kata sandi tidak cocok.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!phone || !birthDate || !gender) {
      toast.error("Semua bidang wajib diisi.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    try {
      const imageData = avatar; // Use the cropped image if available
      if (!imageData) {
        throw new Error("Please upload an avatar.");
      }

      const res = await axios.post("http://localhost:3000/auth/register", {
        avatar: imageData,
        nama: name,
        email: email,
        password: password,
        no_hp: phone,
        tgl_lahir: birthDate,
        gender: gender,
      });
      toast.success("Registration Successful! Please log in.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message || "An error occurred.");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
        setIsModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditAvatar = () => {
    setIsModalOpen(true);
  };

  const handleCrop = async () => {
    try {
      const croppedImage = await croppieInstance.result("base64");
      setAvatar(croppedImage);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error cropping image:", err);
      setAvatarError("Error cropping image. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setAvatarPreview(null);
    setAvatarError("");
  };

  useEffect(() => {
    let croppieInstance = null;

    const initializeCroppie = () => {
      croppieInstance = new Croppie(croppieRef.current, {
        viewport: { width: 200, height: 200, type: "circle" },
        boundary: { width: 300, height: 300 }, // Ensure boundary is defined
        showZoomer: true,
      });
      croppieInstance.bind({
        url: avatarPreview,
      });
      setCroppieInstance(croppieInstance);
    };

    const safelyCallDestroy = (instance) => {
      if (instance) {
        try {
          instance.destroy();
          setCroppieInstance(null);
        } catch (error) {
          console.error("Error destroying Croppie instance:", error);
        }
      }
    };

    if (isModalOpen && croppieRef.current && avatarPreview) {
      if (croppieInstance) {
        safelyCallDestroy(croppieInstance);
      }
      initializeCroppie();
    }

    return () => {
      safelyCallDestroy(croppieInstance);
    };
  }, [isModalOpen, avatarPreview]);

  const renderStep1 = () => (
    <>
      <h1 className="mb-3 text-3xl font-bold md:mb-5 md:text-4xl">Daftar</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (validateStep1()) setStep(2);
        }}
        className="w-full mx-auto">
        <label htmlFor="name" className="block mb-1 font-medium md:mb-2">
          Nama
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="block w-full px-3 py-2 mb-3 border-2 border-c1b"
          placeholder="Nama Lengkap"
        />
        <label htmlFor="email" className="block mb-1 font-medium md:mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="block w-full px-3 py-2 mb-3 border-2 border-c1b"
          placeholder="email@email.com"
        />
        <label htmlFor="password" className="block mb-1 font-medium md:mb-2">
          Kata Sandi
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="block w-full px-3 py-2 mb-3 border-2 border-c1b"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <label
          htmlFor="confirmPassword"
          className="block mb-1 font-medium md:mb-2">
          Konfirmasi Kata Sandi
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirmPassword"
          className="block w-full px-3 py-2 mb-5 border-2 border-c1b"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
        />
        <AuthButton type="submit" label="Lanjut" />
      </form>
    </>
  );

  const renderStep2 = () => (
    <>
      <h1 className="mb-3 text-3xl font-bold md:mb-5 md:text-4xl">
        Lengkapi Profil
      </h1>
      <form onSubmit={handleSubmit} className="w-full mx-auto">
        <label htmlFor="avatar" className="block mb-1 font-medium md:mb-2">
          Avatar (optional)
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="relative block w-32 h-32 overflow-hidden bg-gray-200 rounded-full cursor-pointer">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="object-cover w-full h-full"
                onClick={() => handleEditAvatar()}
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-gray-400 material-icons">
                add_a_photo
              </span>
            )}
            <input
              type="file"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        </div>
        {avatarError && (
          <p className="mt-2 text-sm text-red-500">{avatarError}</p>
        )}
        <label htmlFor="phone" className="block mb-1 font-medium md:mb-2">
          No Handphone
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="phone"
          className="block w-full px-3 py-2 mb-3 border-2 border-c1b"
          placeholder="Nomor Telepon"
        />
        <label htmlFor="birthDate" className="block mb-1 font-medium md:mb-2">
          Tanggal Lahir
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          id="birthDate"
          className="block w-full px-3 py-2 mb-3 border-2 border-c1b"
        />
        <label htmlFor="gender" className="block mb-1 font-medium md:mb-2">
          Gender
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          id="gender"
          className="block w-full px-3 py-2 mb-5 border-2 border-c1b">
          <option value="">Pilih Gender</option>
          <option value="L">Laki-laki</option>
          <option value="P">Perempuan</option>
          <option value="N">Tidak Ingin Menyebutkan</option>
        </select>
        <AuthButton type="submit" label="Daftar" />
      </form>
    </>
  );

  return (
    <>
      <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="flex bg-g1">
          <Link className="self-center w-1/2 h-auto mx-auto" to="/">
            <img src="/src/assets/img/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex flex-col justify-center px-10 space-y-2 bg-white md:p-20 md:space-y-4">
          {step === 1 ? renderStep1() : renderStep2()}
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-lg shadow-lg">
            <div ref={croppieRef}></div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-white bg-red-500 rounded">
                Batal
              </button>
              <button
                onClick={handleCrop}
                className="px-4 py-2 text-white bg-blue-500 rounded">
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Register;
