import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import React, { useState } from "react";
// import { Editor } from '@tinymce/tinymce-react';

function AddEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
        <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-2xl font-semibold">Kategori Event</h2>
            <button className="text-gray-400" onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              Format*
            </label>
            <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Pilih format event</option>
              {/* Add more options as needed */}
            </select>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Topik*
            </label>
            <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Pilih topik event</option>
              {/* Add more options as needed */}
            </select>

            <label className="block mt-4 text-sm font-medium text-gray-700">
              Tag
            </label>
            <input
              type="text"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Tambahkan kata kunci agar eventmu mudah ditemukan"
            />
          </div>

          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              Jenis Event
            </label>
            <div className="mt-2">
              <div className="my-2 p-3 border-2 border-c1b">
                <input
                  type="radio"
                  id="public"
                  name="eventType"
                  value="Public"
                />
                <label htmlFor="public" className="ml-2">
                  Public
                </label>
                <p className="text-sm ml-5">
                  Event kamu akan tampil di halaman Cari Event
                </p>
              </div>
              <div className="my-2 p-3 border-2 border-c1b">
                <input
                  type="radio"
                  id="private"
                  name="eventType"
                  value="Private"
                />
                <label htmlFor="private" className="ml-2">
                  Private
                </label>
                <p className="text-sm ml-5">
                  Event kamu hanya diakses oleh orang tertentu
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-4">
            <button
              className="px-4 w-full py-2 text-white bg-blue-600 rounded-md"
              onClick={onClose}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-32 min-h-auto">
        {/* <form action=""> */}
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="relative">
            <img
              src="/src/assets/img/carousel/carousel3.png" // Update this path to your image path
              alt="Event Banner"
              className="object-cover w-fit h-72"
            />
          </div>
          <div className="px-24 pb-10 my-3 shadow-md">
            <div className="sm:flex-row sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Nama Event*"
                    className="w-full p-2 my-2 text-xl font-semibold"
                  />
                </div>
                <button
                  onClick={openModal}
                  className="block p-2 mt-1 text-black rounded-md shadow-sm">
                  Pilih Kategori*
                </button>
                <hr className="mt-3 font-bold" />
                <div className="grid grid-cols-3 my-5 justify-evenly sm:flex-row sm:space-x-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Diselenggarakan Oleh{" "}
                    </h2>
                    <input className="mt-3" type="file" name="logo" id="" />
                  </div>
                  <div className="justify-self-center">
                    <h2 className="text-xl font-semibold">Tanggal & Waktu</h2>
                    <input
                      type="date"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    <input
                      type="time"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="justify-self-center">
                    <h2 className="text-xl font-semibold">Lokasi</h2>
                    <input
                      type="text"
                      placeholder="Pilih Lokasi"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-2">
              <button className="p-2 text-xl font-semibold hover:border-b-4 hover:border-black">
                KATEGORI EVENT
              </button>
              <button className="p-2 text-xl font-semibold hover:border-b-4 hover:border-black">
                DESKRIPSI EVENT
              </button>
            </div>
            <div className="flex p-10 mt-2 space-x-4 bg-c1b">
              <button className="flex-1 py-2 text-white rounded-md w-fit bg-primary">
                <div className="flex p-5 text-left justify-evenly">
                  <p>
                    Buat Tiket <br />
                    <strong className="text-xl">Berbayar</strong>
                  </p>
                  <span className="self-center bg-secondary h-fit material-symbols-outlined">
                    add
                  </span>
                </div>
              </button>
              <button className="flex-1 py-2 text-white rounded-md w-fit bg-primary">
                <div className="flex p-5 text-left justify-evenly">
                  <p>
                    Buat Tiket <br />
                    <strong className="text-xl">Gratis</strong>
                  </p>
                  <span className="self-center bg-secondary h-fit material-symbols-outlined">
                    add
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="text-xl font-semibold">Info Kontak</h2>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Nama Narahubung*
              </label>
              <input
                type="text"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Nama narahubung"
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Email yang dapat dihubungi"
              />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">
                No. Ponsel*
              </label>
              <input
                type="tel"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="No.Telp"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 py-2 md:flex-row md:space-x-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Info Kontak</h2>
              <div className="mt-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Nomor Handphone
                  </label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Nomor KTP
                  </label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Tanggal Lahir
                  </label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis Kelamin
                  </label>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Pengaturan Tambahan</h2>
              <div className="flex justify-between mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  Jumlah maks. tiket per transaksi
                </label>
                <select className="self-end block w-auto mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>5 Tiket</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    1 akun email - 1 kali transaksi
                  </p>
                  <p className="text-xs text-gray-500">
                    1 akun email hanya dapat melakukan 1 kali transaksi
                    pembelian tiket.
                  </p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="radio"
                    name="toggle"
                    id="toggle"
                    className="absolute block w-6 h-6 bg-white border-4"
                  />
                  <label htmlFor="toggle" className="block h-6"></label>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    1 tiket - 1 data pemesan
                  </p>
                  <p className="text-xs text-gray-500">
                    1 tiket hanya dapat digunakan untuk 1 data pemesan, data
                    antar tiket tidak boleh sama.
                  </p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    type="radio"
                    name="toggle"
                    id="toggle2"
                    className="absolute block w-6 h-6 bg-white border-4"
                  />
                  <label htmlFor="toggle2" className="block h-6"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end px-4 py-4 space-x-4">
            <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md">
              Simpan Draf
            </button>
            <button className="px-4 py-2 text-white bg-purple-600 rounded-md">
              Buat Event Sekarang
            </button>
          </div>
        </div>
        {/* </form> */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <Footer />
    </>
  );
}

export default AddEvent;
