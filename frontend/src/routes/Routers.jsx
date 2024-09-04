import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Contact from "../pages/Contact.jsx";
import DoctorDeatil from "../components/Doctors/DoctorDeatil.jsx";
import Doctors from "../components/Doctors/Doctors.jsx";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors/:id" element={<DoctorDeatil />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
  );
};

export default Routers;
