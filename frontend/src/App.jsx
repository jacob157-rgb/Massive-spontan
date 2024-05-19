import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Explore from "./pages/explore/Explore";
import NavTabs from "./components/navtabs/NavTabs";
import Trending from "./pages/landing/Trending";
import Recomendation from "./pages/landing/Recomendation";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/explore" element={<Explore />} />
        </Routes>
        <NavTabs />
       <Trending></Trending>
       <Recomendation></Recomendation>
       <Recomendation></Recomendation>
       <Recomendation></Recomendation>
       <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
