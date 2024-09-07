import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow p-3 lg:p-5 rounded-md">
      <div className="flex  items-center justify-between">
        <p className="test__para mt-0 font-semibold">Ticket Price</p>
        <span className="teext-[15px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          50 BDT
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="test__para mt-0 font-semibold">Availbe Time slots.</p>

        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 WIB - 9:30 WIB
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Wednesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              5:00 WIB - 8:30 WIB
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              3:00 WIB - 10:30 WIB
            </p>
          </li>
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md">Booking</button>
    </div>
  );
};

export default SidePanel;
