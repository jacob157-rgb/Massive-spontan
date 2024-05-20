import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Explore from "./pages/explore/Explore";
import Login from "./pages/auth/Login";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

function AuthLayout() {
  return (
    <>
      {/* Tidak menampilkan header */}
      <Outlet />
      {/* Tidak menampilkan footer */}
    </>
  );
}

export default App;
