import Select from "react-select";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TextUnderline from "../../components/misc/TextUnderline";

const options = {
  eventTypes: [
    { value: "conference", label: "Conference" },
    { value: "workshop", label: "Workshop" },
    { value: "seminar", label: "Seminar" },
    { value: "webinar", label: "Webinar" },
  ],
  categories: [
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health" },
    { value: "education", label: "Education" },
  ],
  locations: [
    { value: "jakarta", label: "Jakarta" },
    { value: "bandung", label: "Bandung" },
    { value: "surabaya", label: "Surabaya" },
    { value: "online", label: "Online" },
  ],
  times: [
    { value: "morning", label: "Morning (09:00 - 12:00)" },
    { value: "afternoon", label: "Afternoon (13:00 - 17:00)" },
    { value: "evening", label: "Evening (18:00 - 21:00)" },
  ],
  prices: [
    { value: "free", label: "Free" },
    { value: "under50", label: "Under $50" },
    { value: "50to100", label: "$50 to $100" },
    { value: "over100", label: "Over $100" },
  ],
};

function Explore() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col flex-none h-screen pt-12 pl-12 pr-6 shadow-md w-72">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-medium">Filter</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-lg font-normal">
                <li>
                  <Select options={options.eventTypes}></Select>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600">
                    <span className="flex-none">Jenis Event</span>
                    <span class="flex-1 material-symbols-outlined">
                      stat_minus_1
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600">
                    <span>Kategori</span>
                    <span class="flex-1 material-symbols-outlined">
                      stat_minus_1
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600">
                    <span>Lokasi</span>
                    <span class="flex-1 material-symbols-outlined">
                      stat_minus_1
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600">
                    <span>Waktu</span>
                    <span class="flex-1 material-symbols-outlined">
                      stat_minus_1
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 mb-3 space-x-3 border-b-2 border-indigo-600">
                    <span>Harga</span>
                    <span class="flex-1 material-symbols-outlined">
                      stat_minus_1
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 px-32 pt-12">
          <div className="mb-5">
            <TextUnderline label="Menampilkan 4 - 234 dari total 1000 public events" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-3 pl-2">
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/anggun.png"
                alt=""
              />
              <h2 className="text-lg font-bold">
                FLASHBACK motion - Enchanting Anggun 2024
              </h2>
              <p className="text-xs">28 Juli 2024</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/dewa.jpg"
                alt=""
              />
              <h2 className="text-lg font-bold">GOPHORIA - Dewa19</h2>
              <p className="text-xs">12 Juni 2024</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/pland.jpg"
                alt=""
              />
              <h2 className="text-lg font-bold">P-LAND: K-Pop Art Market Vol.3</h2>
              <p className="text-xs">22 Juni - 23 Juni 2024</p>
            </div>
            <div className="w-full max-w-lg mx-auto lg:mx-0">
              <img
                className="object-cover w-full h-auto mb-2"
                src="/src/assets/img/card/evoria.jpg"
                alt=""
              />
              <h2 className="text-lg font-bold">EVORIA Music Festival 2024</h2>
              <p className="text-xs">26 Mei 2024</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
