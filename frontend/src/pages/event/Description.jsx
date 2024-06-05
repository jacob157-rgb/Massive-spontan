import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EventBanner from "../../components/banner/EventBanner";
import NavTabsTiket from "../../components/navtabs/NavTabsTiket";
import DescriptionCard from "../../components/card/DescriptionCard";
import PenyelenggaraCard from "../../components/card/PenyelenggaraCard";
import Footer from "../../components/footer/Footer";
import Kategori from "../../components/card/Kategori";
import SnkCard from "../../components/card/SnkCard";
import Cart from "../../components/card/Cart";

function Description() {
  return (
    <>
      <Navbar />
      <EventBanner />
      <NavTabsTiket />
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-8 lg:px-32">
        <div className="md:col-span-7">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Kategori />
              <DescriptionCard />
            </div>
            <div className="md:col-span-5">
              <SnkCard />
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <PenyelenggaraCard />
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Description;
