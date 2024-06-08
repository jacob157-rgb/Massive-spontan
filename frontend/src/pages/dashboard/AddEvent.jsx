import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import { Editor } from '@tinymce/tinymce-react';

function AddEvent() {
    return (
        <>
            <Navbar />
            <div className="min-h-auto w-full p-32">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src="/src/assets/img/carousel/carousel3.png" // Update this path to your image path
                            alt="Event Banner"
                            className="w-fit h-72 object-cover"
                        />
                    </div>
                    <div className="p-12 shadow-md my-3">
                        <div className="sm:flex-row sm:justify-between sm:items-center">
                            <div className="mb-4 sm:mb-0">
                                <h2 className="text-xl font-semibold">Nama Event*</h2>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
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
                                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                        <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                    <div className="justify-self-center">
                                        <h2 className="text-xl font-semibold">Lokasi</h2>
                                        <input type="text" placeholder="Pilih Lokasi" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                        <div className="grid grid-cols-2">
                            <button className="text-xl p-2 font-semibold hover:border-b-2 hover:border-black">Kategori Event</button>
                            <button className="text-xl p-2 font-semibold hover:border-b-2 hover:border-black">Deskripsi Event</button>
                        </div>
                        <div className="flex space-x-4 mt-2">
                            <button className="flex-1 bg-blue-500 text-white py-2 rounded-md">Buat Tiket Berbayar</button>
                            <button className="flex-1 bg-blue-500 text-white py-2 rounded-md">Buat Tiket Gratis</button>
                        </div>
                    </div>
                    <div className="px-4 py-2">
                        <h2 className="text-xl font-semibold">Info Kontak</h2>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">Nama Narahubung*</label>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Nama narahubung" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">Email*</label>
                            <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email yang dapat dihubungi" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm font-medium text-gray-700">No. Ponsel*</label>
                            <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="No.Telp" />
                        </div>
                    </div>
                    <div className="px-4 py-2 flex flex-col md:flex-row md:space-x-8">
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">Info Kontak</h2>
                            <div className="mt-2">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label className="block text-sm font-medium text-gray-700">Nomor Handphone</label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label className="block text-sm font-medium text-gray-700">Nomor KTP</label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                    <label className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">Pengaturan Tambahan</h2>
                            <div className="mt-2 flex justify-between">
                                <label className="block text-sm font-medium text-gray-700">Jumlah maks. tiket per transaksi</label>
                                <select className="mt-1 block w-auto self-end rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option>5 Tiket</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-700">1 akun email - 1 kali transaksi</p>
                                    <p className="text-xs text-gray-500">1 akun email hanya dapat melakukan 1 kali transaksi pembelian tiket.</p>
                                </div>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-700">1 tiket - 1 data pemesan</p>
                                    <p className="text-xs text-gray-500">1 tiket hanya dapat digunakan untuk 1 data pemesan, data antar tiket tidak boleh sama.</p>
                                </div>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                    <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                    <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-4 flex justify-end space-x-4">
                        <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md">Simpan Draf</button>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-md">Buat Event Sekarang</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddEvent;
