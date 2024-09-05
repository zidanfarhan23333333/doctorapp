import React from "react";
import { Link } from "react-router-dom";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { BsArrowRight } from "react-icons/bs";
// import About from "../components/About/About.jsx";
import About from "../components/About/About.jsx";
import DoctorList from "../components/Doctors/DoctorList.jsx";
import { services } from "../assets/data/services.js";
import Services from "../components/Services/Services.jsx";
import FaqList from "../components/faq/FaqList.jsx";
import TestimoniList from "../components/Testimoni/TestimoniList.jsx";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero section */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="test__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione cum assumenda quod reprehenderit sapiente esse illum
                  dolore itaque eaque voluptate?
                </p>
                <button className="btn">Request an Appointment</button>

                <div className="mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="test__para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="test__para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="test__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical Services
            </h2>
            <p className="test__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              ea?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="texr-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit ducimus veniam dicta, vitae aliquid cum corrupti
                    laudantium accusantium quam saepe!
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justidy-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="texr-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit ducimus veniam dicta, vitae aliquid cum corrupti
                    laudantium accusantium quam saepe!
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justidy-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="texr-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Impedit ducimus veniam dicta, vitae aliquid cum corrupti
                    laudantium accusantium quam saepe!
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justidy-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <About />
      </section>

      {/* section */}
      <section>
        <div className="container">
          <div className="xl-w[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eligendi corrupti at natus et veniam?
            </p>
          </div>
          <Services />
        </div>
      </section>

      {/* featured */}

      <section>
        <div className="container">
          <div className="flex flex-items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Gey virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4 mt-4">
                <li className="test__para">
                  1. Schedule the appointment directly
                </li>
                <li className="test__para">
                  2.Search fot your physician here, and contact their office
                </li>
                <li className="test__para">
                  3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias minima expedita blanditiis magni provident. Deleniti,
                  cum?
                </li>
                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </ul>
            </div>

            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue,25
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      10:00 WIB
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h--34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irishBlueColor font-[500] mt-2 lg:mt-4 rounded-full"
                  style={{ backgroundColor: "#ccf0f3" }}
                >
                  Consultation
                </div>

                <div className="flex flex-items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Farhan Azidan
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============our doctors=========== */}
      <section>
        <div className="container">
          <div className="xl-w[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates eligendi corrupti at natus et veniam?
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* faq section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                facere.
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}

      <section>
        <div className="xl-w[470px] mx-auto">
          <h2 className="heading text-center">What Our patinet say</h2>
          <p className="text__para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi corrupti at natus et veniam?
          </p>
        </div>

        <TestimoniList />
      </section>
    </>
  );
};

export default Home;
