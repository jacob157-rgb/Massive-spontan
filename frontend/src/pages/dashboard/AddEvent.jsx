import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import { Editor } from '@tinymce/tinymce-react';

function AddEvent() {
  return (
    <>
      <Navbar />
      <div className="w-full p-32 min-h-auto">
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <div className="relative">
            <img
              src="/src/assets/img/carousel/carousel3.png" // Update this path to your image path
              alt="Event Banner"
              className="object-cover w-fit h-72"
            />
          </div>
          <div className="p-12 my-3 shadow-md">
            <div className="sm:flex-row sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <div>
                  <input
                    type="text"
                    placeholder="Nama Event*"
                    className="p-2 text-xl font-semibold border rounded opacity-0"
                  />
                </div>
                <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Pilih Kategori</option>
                  {/* Add more options as needed */}
                </select>

                <div className="grid grid-cols-3 my-5 justify-evenly sm:flex-row sm:space-x-4">
                  <div>
                    <h2 className="text-xl font-semibold">Diselenggarakan Oleh </h2>
                    <input className="mt-3" type="file" name="logo" id="" />
                  </div>
                  <div className="justify-self-center">
                    <h2 className="text-xl font-semibold">Tanggal & Waktu</h2>
                    <input type="date" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    <input type="time" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div className="justify-self-center">
                    <h2 className="text-xl font-semibold">Lokasi</h2>
                    <input type="text" placeholder="Pilih Lokasi" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-2">
              <button className="p-2 text-xl font-semibold hover:border-b-2 hover:border-black">Kategori Event</button>
              <button className="p-2 text-xl font-semibold hover:border-b-2 hover:border-black">Deskripsi Event</button>
            </div>
            <div className="flex mt-2 space-x-4">
              <button className="flex-1 py-2 text-white bg-blue-500 rounded-md">Buat Tiket Berbayar</button>
              <button className="flex-1 py-2 text-white bg-blue-500 rounded-md">Buat Tiket Gratis</button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="text-xl font-semibold">Info Kontak</h2>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Nama Narahubung*</label>
              <input type="text" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Nama narahubung" />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input type="email" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email yang dapat dihubungi" />
            </div>
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700">No. Ponsel*</label>
              <input type="tel" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="No.Telp" />
            </div>
          </div>
          <div className="flex flex-col px-4 py-2 md:flex-row md:space-x-8">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Info Kontak</h2>
              <div className="mt-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                  <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                  <label className="block text-sm font-medium text-gray-700">Nomor Handphone</label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                  <label className="block text-sm font-medium text-gray-700">Nomor KTP</label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                  <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                </div>
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded" />
                  <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Pengaturan Tambahan</h2>
              <div className="flex justify-between mt-2">
                <label className="block text-sm font-medium text-gray-700">Jumlah maks. tiket per transaksi</label>
                <select className="self-end block w-auto mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>5 Tiket</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">1 akun email - 1 kali transaksi</p>
                  <p className="text-xs text-gray-500">1 akun email hanya dapat melakukan 1 kali transaksi pembelian tiket.</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" name="toggle" id="toggle" className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox" />
                  <label htmlFor="toggle" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"></label>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">1 tiket - 1 data pemesan</p>
                  <p className="text-xs text-gray-500">1 tiket hanya dapat digunakan untuk 1 data pemesan, data antar tiket tidak boleh sama.</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" name="toggle" id="toggle2" className="absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox" />
                  <label htmlFor="toggle2" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end px-4 py-4 space-x-4">
            <button className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md">Simpan Draf</button>
            <button className="px-4 py-2 text-white bg-purple-600 rounded-md">Buat Event Sekarang</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddEvent;