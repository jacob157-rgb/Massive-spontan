import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import Navbar from "../../../components/navbar/Navbar";
import NavTabs from "../../../components/navtabs/NavTabs";
import Trending from "../Trending";
import Recomendation from "../Recomendation";
import BestSeller from "../BestSeller";
import ComingSoon from "../ComingSoon";
import Kota from "../Kota";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";

const banner = [
  {
    no: 1,
    image: "/src/assets/img/carousel/carousel1.png",
  },
  {
    no: 2,
    image: "/src/assets/img/carousel/carousel2.png",
  },
  {
    no: 3,
    image: "/src/assets/img/carousel/carousel3.png",
  },
  {
    no: 4,
    image: "/src/assets/img/carousel/carousel4.png",
  },
];

function Olahraga() {
  return (
    <>
      <Navbar />
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}>
        {banner.map((item) => (
          <SwiperSlide key={item.no}>
            <Link>
              <img
                className="object-cover object-center w-full h-44 md:h-auto"
                src={item.image}
                alt={`Banner ${item.no}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavTabs />
      <Trending />
      <Recomendation />
      <Link>
        <img
          className="w-full h-auto px-4 rounded-sm lg:px-32"
          src="/src/assets/img/card/gp.png"
          alt=""
        />
      </Link>
      <Kota />
      <ComingSoon />
      <BestSeller />
      <Footer />
    </>
  );
}

export default Olahraga;
