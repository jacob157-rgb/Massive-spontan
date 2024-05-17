import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import Explore from "./pages/explore/Explore";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
