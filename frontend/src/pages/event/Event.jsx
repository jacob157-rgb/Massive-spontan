import Navbar from "../../components/navbar/Navbar";
import NavTabsTiket from "../../components/navtabs/NavTabsTiket";
import Footer from "../../components/footer/Footer";
import TiketCard from "../../components/card/TiketCard";
import { Link } from "react-router-dom";

function Event() {
  return (
    <>
      <Navbar />
      <img
        className="object-cover object-center w-full h-44 md:h-auto"
        src="/src/assets/img/carousel/carousel3.png"
      />
      <NavTabsTiket />
      <TiketCard />
      <Footer />
    </>
  );
}

export default Event;
