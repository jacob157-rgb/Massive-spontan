import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Explore from "./pages/explore/Explore";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Event from "./pages/event/Event";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
