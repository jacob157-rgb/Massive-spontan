import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Explore from "./pages/explore/Explore";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
