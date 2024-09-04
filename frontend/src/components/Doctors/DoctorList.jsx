import React from "react";
import { doctors } from "../../assets/data/doctors.js"; // Make sure this path is correct
import DoctorCard from "./DoctorCard.jsx";

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.length > 0 ? (
        doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
      ) : (
        <p>No doctors available</p>
      )}
    </div>
  );
};

export default DoctorList;
