import { Routes, Route } from "react-router-dom";
import Konser from "./pages/landing/konser/Konser";
import Olahraga from "./pages/landing/olahraga/Olahraga";
import Festival from "./pages/landing/festival/Festival";
import Workshop from "./pages/landing/workshop/Workshop";
import Explore from "./pages/explore/Explore";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Tiket from "./pages/event/Tiket";
import DashboardCreator from "./pages/dashboard/DashboardCreator"; 
import Description from "./pages/event/Description"; // Import Description component
import Facility from "./pages/event/Facility"; // Import Facility component
import Ratings from "./pages/event/Ratings"; // Import Ratings component
import GoogleCallback from "./pages/auth/GoogleCallback"; // Import GoogleCallback component
import AddEvent from "./pages/dashboard/AddEvent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Konser />} />
        <Route path="/sports" element={<Olahraga />} />
        <Route path="/fest" element={<Festival />} />
        <Route path="/dev" element={<Workshop />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event/tiket" element={<Tiket />} />
        <Route path="/event/add" element={<AddEvent />} />
        <Route path="/create-event" element={<DashboardCreator />} />
        <Route path="/event/description" element={<Description />} />
        <Route path="/event/facility" element={<Facility />} />
        <Route path="/event/ratings" element={<Ratings />} />
        <Route path="/google/callback" element={<GoogleCallback />} />
      </Routes>
    </>
  );
}

export default App;
