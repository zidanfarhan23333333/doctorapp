import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Contact from "../pages/Contact.jsx";
import DoctorDeatil from "../pages/Doctors/DoctorDetail.jsx";
import Doctor from "../pages/Doctors/Doctors.jsx";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors/:id" element={<DoctorDeatil />} />
      <Route path="/doctors" element={<Doctor />} />
    </Routes>
  );
};

export default Routers;
