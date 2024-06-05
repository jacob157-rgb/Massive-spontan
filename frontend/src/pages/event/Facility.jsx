import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EventBanner from "../../components/banner/EventBanner";
import NavTabsTiket from "../../components/navtabs/NavTabsTiket";
import TextUnderline from "../../components/misc/TextUnderline";
import PenyelenggaraCard from "../../components/card/PenyelenggaraCard";
import Kategori from "../../components/card/Kategori";
import Cart from "../../components/card/Cart";
import Footer from "../../components/footer/Footer";
import Facilities from "../../components/facility/Facilities";

function Facility() {
  return (
    <>
      <Navbar />
      <EventBanner />
      <NavTabsTiket />
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-8 lg:px-32">
        <div className="md:col-span-7">
          <Kategori />
          <Facilities />
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

export default Facility;
