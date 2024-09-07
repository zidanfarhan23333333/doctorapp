import React from "react";
import { formDate } from "../../utils/formDate";

const DoctorsAbout = () => {
  return (
    <div>
      <h3 className="text-[15px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About Of
        <span className="text-irisBlueColor font-bold text-[19px] leading-9">
          Muhammad Farhan
        </span>
      </h3>
      <p className="test__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
        quidem. Perferendis assumenda rerum quos ad in similique accusantium
        maxime quam laboriosam iusto? Odit nam sunt aut delectus nobis corrupti
        sapiente, repellat quis culpa consequatur porro exercitationem ab
        consectetur velit. Ipsa, soluta quos. Rerum, quis quidem suscipit nemo
        minima iste? Quaerat!
      </p>

      <div className="mt-12">
        <h3 className="text-[15px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-se">
                {formDate("12-04-2010")} - {formDate("12-04-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Universitas Gadjah Mada
              </p>
            </div>
            <p className="text-[14px] leading=5 font-medium text-textColor">
              RSUD SARDJITO, Jogjakarta
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-se">
                {formDate("12-04-2010")} -{formDate("12-04-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHP In Jogja
              </p>
            </div>
            <p className="text-[14px] leading=5 font-medium text-textColor">
              RSUD SARDJITO, Jogjakarta
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[15px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {" "}
              {formDate("12-04-2010")} - {formDate("12-04-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Dr.Ma doeng sok
            </p>
            <p className="text-[14px] leading=5 font-medium text-textColor">
              RSUD Tidar, Jogjakarta
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {" "}
              {formDate("12-04-2010")} - {formDate("12-04-2016")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Dr.Ma doeng sok
            </p>
            <p className="text-[14px] leading=5 font-medium text-textColor">
              RSUD Tidar, Jogjakarta
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;
