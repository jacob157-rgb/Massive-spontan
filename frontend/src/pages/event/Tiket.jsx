import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EventBanner from "../../components/banner/EventBanner";
import NavTabsTiket from "../../components/navtabs/NavTabsTiket";
import PenyelenggaraCard from "../../components/card/PenyelenggaraCard";
import Cart from "../../components/card/Cart";
import Footer from "../../components/footer/Footer";
import Kategori from "../../components/card/Kategori";
import ListTiket from "../../components/tiket/ListTiket";

function Tiket() {
  return (
    <>
      <Navbar />
      <EventBanner />
      <NavTabsTiket />
      <div className="grid grid-cols-12 gap-8 px-4 md:px-8 lg:px-32">
        <div className="col-span-12 md:col-span-7">
          <Kategori />
          <ListTiket />
        </div>
        <div className="col-span-12 md:col-span-5">
          <PenyelenggaraCard />
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tiket;
