import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      {/* Render informasi dokter lainnya */}
    </div>
  );
};

export default DoctorCard;
