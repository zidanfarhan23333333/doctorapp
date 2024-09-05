import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "./../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const TestimoniList = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="swiper-container" // Add this class for custom styles if needed
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg shadow-lg bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar}
                alt="Patient Avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Farhan Azidan
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar
                      key={index}
                      className="text-yellowColor w-[18px] h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              blanditiis repellendus fugit inventore quos error?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg shadow-lg bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar}
                alt="Patient Avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Farhan Azidan
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar
                      key={index}
                      className="text-yellowColor w-[18px] h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              blanditiis repellendus fugit inventore quos error?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg shadow-lg bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar}
                alt="Patient Avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Farhan Azidan
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar
                      key={index}
                      className="text-yellowColor w-[18px] h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              blanditiis repellendus fugit inventore quos error?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-lg shadow-lg bg-white">
            <div className="flex items-center gap-[13px]">
              <img
                src={patientAvatar}
                alt="Patient Avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Farhan Azidan
                </h4>
                <div className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar
                      key={index}
                      className="text-yellowColor w-[18px] h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              blanditiis repellendus fugit inventore quos error?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimoniList;
