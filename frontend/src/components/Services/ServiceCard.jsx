import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({
  item,
  index,
  bgColor = "#f0f0f0",
  textColor = "#333",
}) => {
  const { name, desc } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor">{desc}</p>

      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to={`/service`}
          className="text-primaryColor flex items-center gap-2 hover:text-secondaryColor transition duration-300"
        >
          Learn More
          <BsArrowRight className="text-[20px]" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
