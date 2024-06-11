import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
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
import Description from "./pages/event/Description";
import Facility from "./pages/event/Facility";
import Ratings from "./pages/event/Ratings";
import GoogleCallback from "./pages/auth/GoogleCallback";
import AddEvent from "./pages/dashboard/AddEvent";
import { useUser } from "../contexts/UserContext";

function App() {
  const { token } = useUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<Konser />} />
        <Route path="/sports" element={<Olahraga />} />
        <Route path="/fest" element={<Festival />} />
        <Route path="/dev" element={<Workshop />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/event/tiket" element={<Tiket />} />
        <Route path="/event/add" element={<AddEvent />} />
        <Route path="/create-event" element={<DashboardCreator />} />
        <Route path="/event/description" element={<Description />} />
        <Route path="/event/facility" element={<Facility />} />
        <Route path="/event/ratings" element={<Ratings />} />
        <Route path="/google/callback" element={<GoogleCallback />} />

        {/* Routes accessible only to non-logged-in users */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />

        {/* Routes accessible only to logged-in users */}
        {token && <></>}
      </Routes>
    </>
  );
}

export default App;
