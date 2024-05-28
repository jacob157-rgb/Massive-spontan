import Navbar from "../../components/navbar/Navbar";
import NavTabs from "../../components/navtabs/NavTabs";
import Trending from "./Trending";
import Recomendation from "./Recomendation";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import Footer from "../../components/footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <img className="w-full h-auto" src="/src/assets/img/carousel/carousel1.png" alt="" />
      <NavTabs />
      <Trending></Trending>
      <Recomendation></Recomendation>
      <img className="w-full h-auto px-4 rounded-sm" src="/src/assets/img/card/gp.png" alt="" />
      <Carousel3></Carousel3>
      <Carousel2></Carousel2>
      <Carousel></Carousel>
      <Footer/>
    </>
  );
}

export default Landing;
