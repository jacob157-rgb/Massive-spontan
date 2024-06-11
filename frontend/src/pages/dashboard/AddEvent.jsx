import React, { useState, useRef } from 'react';
import Croppie from 'croppie';
import 'croppie/croppie.css';
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const BannerUploader = ({ setImage }) => {
  const [croppieInstance, setCroppieInstance] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setModalOpen(true);
        setTimeout(() => {
          const el = document.getElementById('croppie-element');
          const croppie = new Croppie(el, {
            viewport: { width: 1200, height: 320 },
            boundary: { width: 1200, height: 320 },
            showZoomer: true,
            enableResize: true,
          });
          croppie.bind({ url: e.target.result });
          setCroppieInstance(croppie);
        }, 100);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    if (croppieInstance) {
      croppieInstance.result({ type: 'base64', size: { width: 1200, height: 320 } }).then((base64) => {
        setImage(base64);
        setModalOpen(false);
      });
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={() => fileInputRef.current.click()}
      >
        Upload Banner
      </button>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-lg">
            <div id="croppie-element" />
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
              onClick={handleCrop}
            >
              Crop
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const StepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-4">
      {step === 1 && (
        <div>
          <h2 className="mb-4 text-2xl">Step 1: Kategori Event</h2>
          {/* Add your form fields for step 1 here */}
          <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="mb-4 text-2xl">Step 2: Deskripsi Event</h2>
          {/* Add your form fields for step 2 here */}
          <button className="px-4 py-2 text-white bg-gray-500 rounded" onClick={prevStep}>
            Back
          </button>
          <button className="px-4 py-2 ml-2 text-white bg-blue-500 rounded" onClick={nextStep}>
            Next
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="mb-4 text-2xl">Step 3: Info Kontak</h2>
          {/* Add your form fields for step 3 here */}
          <button className="px-4 py-2 text-white bg-gray-500 rounded" onClick={prevStep}>
            Back
          </button>
          <button className="px-4 py-2 ml-2 text-white bg-blue-500 rounded">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

function AddEvent() {
  const [image, setImage] = useState(null);

  return (
    <>
      <Navbar />
      <main className="container p-4 mx-auto">
        <div className="mb-4">
          <BannerUploader setImage={setImage} />
          {image && (
            <div className="relative mt-4">
              <img src={image} alt="Banner" className="w-full h-auto" style={{ width: '1200px', height: '320px' }} />
              <div className="absolute flex space-x-2 bottom-4 right-4">
                <button
                  className="p-2 text-white bg-gray-500 rounded"
                  onClick={() => document.querySelector('input[type="file"]').click()}
                >
                  <span className="material-icons">edit</span>
                </button>
                <button
                  className="p-2 text-white bg-red-500 rounded"
                  onClick={() => setImage(null)}
                >
                  <span className="material-icons">delete</span>
                </button>
              </div>
            </div>
          )}
        </div>
        <StepForm />
      </main>
      <Footer />
    </>
  );
}

export default AddEvent;
