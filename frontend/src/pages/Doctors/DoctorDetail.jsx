import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorsAbout from "./DoctorsAbout";
import Feedback from "./Feedback";

const DoctorDetail = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2 flex items-center">
            <figure className="max-w-[200px]">
              <img
                src={doctorImg}
                alt="Doctor"
                className="w-full h-auto object-cover"
              />
            </figure>

            <div className="ml-4">
              <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded-md">
                Ma doeng sok
              </span>
              <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                Muhammad Farhan azidan
              </h3>
              <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]">
                  <img src={starIcon} alt="" />
                  4.7
                </span>
                <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-normal text-textColor">
                  (290)
                </span>
              </div>
              <p className="text__para text-[14px] mt-2 leading-5 md:text-[15px] lg:max-w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam, maxime!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
          <button
            onClick={() => setTab("about")}
            className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${
              tab === "about" ? "border-b border-primaryColor" : ""
            }`}
          >
            About
          </button>

          <button
            onClick={() => setTab("feedback")}
            className={`py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${
              tab === "feedback" ? "border-b border-primaryColor" : ""
            }`}
          >
            Feedback
          </button>
        </div>
        <div className="mt-[50px]">
          {tab === "about" && <DoctorsAbout />}
          {tab === "feedback" && <Feedback />}
        </div>
      </div>
    </section>
  );
};

export default DoctorDetail;
