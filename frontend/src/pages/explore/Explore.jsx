import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import TextUnderline from '../../components/misc/TextUnderline';

function Explore() {
  return (
    <>
      <Navbar />
      <div className='flex flex-row'>
        <div className="flex flex-col flex-none h-screen pt-12 pl-12 pr-6 shadow-md w-72">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-medium">Filter</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-lg font-normal">
                <li className="rounded-sm">
                  <a href="#" className="flex border-b-2 border-indigo-600 items-center p-2 mb-3 space-x-3">
                    <span className='flex-none'>Jenis Event</span>
                    <span class="flex-1 material-symbols-outlined">stat_minus_1</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex border-b-2 border-indigo-600 items-center p-2 mb-3 space-x-3"
                  >
                    <span>Kategori</span>
                    <span class="flex-1 material-symbols-outlined">stat_minus_1</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex border-b-2 border-indigo-600 items-center p-2 mb-3 space-x-3"
                  >
                    <span>Lokasi</span>
                    <span class="flex-1 material-symbols-outlined">stat_minus_1</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex border-b-2 border-indigo-600 items-center p-2 mb-3 space-x-3"
                  >
                    <span>Waktu</span>
                    <span class="flex-1 material-symbols-outlined">stat_minus_1</span>
                  </a>
                </li>
                <li className="rounded-sm">
                  <a
                    href="#"
                    className="flex border-b-2 border-indigo-600 items-center p-2 mb-3 space-x-3"
                  >
                    <span>Harga</span>
                    <span class="flex-1 material-symbols-outlined">stat_minus_1</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex-1 px-32 pt-12'>
          <div className="mb-5">
            <TextUnderline label="Menampilkan 1 - 234 dari total 1000 public events" />
          </div>
          <div className='grid grid-cols-2 gap-4 pt-3 pl-2'>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img className="object-cover w-full h-auto mb-2" src="/src/assets/img/card/anggun.png" alt="" />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img className="object-cover w-full h-auto mb-2" src="/src/assets/img/card/anggun.png" alt="" />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img className="object-cover w-full h-auto mb-2" src="/src/assets/img/card/anggun.png" alt="" />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img className="object-cover w-full h-auto mb-2" src="/src/assets/img/card/anggun.png" alt="" />
              <h2 className="text-lg font-bold">Title</h2>
              <p className="text-xs">Date</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explore