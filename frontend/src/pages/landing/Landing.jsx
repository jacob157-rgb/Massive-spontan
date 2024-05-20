import NavTabs from "../../components/navtabs/NavTabs";
import Trending from "./Trending";
import Recomendation from "./Recomendation";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

function Landing() {
  return (
    <>
      <img src="/src/assets/img/carousel/carousel1.png" alt="" />

      <NavTabs />
      <Trending></Trending>
      <Recomendation></Recomendation>
      <img className="px-32" src="/src/assets/img/card/gp.png" alt="" />
      <Carousel3></Carousel3>
      <Carousel2></Carousel2>
      <Carousel></Carousel>
    </>
  );
}

export default Landing;
