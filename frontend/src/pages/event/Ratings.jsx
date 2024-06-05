import React from "react";
import Navbar from "../../components/navbar/Navbar";
import EventBanner from "../../components/banner/EventBanner";
import NavTabsTiket from "../../components/navtabs/NavTabsTiket";
import PenyelenggaraCard from "../../components/card/PenyelenggaraCard";
import Kategori from "../../components/card/Kategori";
import Review from "../../components/review/Review";
import Cart from "../../components/card/Cart";
import Footer from "../../components/footer/Footer";

function Ratings() {
  return (
    <>
      <Navbar />
      <EventBanner />
      <NavTabsTiket />
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-12 md:px-8 lg:px-32">
        <div className="md:col-span-7">
          <Kategori />
          <Review />
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

export default Ratings;
