import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formDate } from "../../utils/formDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "../Doctors/FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor">
          All Reviews (282)
        </h4>

        <div className="flex flex-col gap-8 mb-[30px]">
          <div className="flex items-center gap-3">
            <figure className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover mt-4"
                src={avatar}
                alt="User Avatar"
              />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 mt-4 text-primaryColor font-bold">
                Abidzar Alghifari
              </h5>
              <p className="text-[14px] leading-5 text-textColor">
                {formDate("02-14-2024")}
              </p>
              <p className="test__para mt-2 font-medium text-[15px]">
                Pelayanan yang bagus sekali😘
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(5).keys()].map((index) => (
                <AiFillStar key={index} color="#0067ff" />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          {!showFeedbackForm ? (
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give Feedback
            </button>
          ) : (
            <FeedbackForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
