import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[15px] leading-6 font-semibold mb-4">
          Bagaimana mendapatkan pengalaman yang luar biasa
        </h3>

        <div className="flex">
          {[...Array(5).keys()].map((_, index) => {
            const starIndex = index + 1;

            return (
              <button
                key={starIndex}
                type="button"
                className={`text-2xl ${
                  starIndex <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(starIndex)}
                onMouseEnter={() => setHover(starIndex)}
                onMouseLeave={() => setHover(0)}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[15px] leading-6 font-semibold mt-0 mb-4">
          share your feedback
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md"
          rows={5}
        >
          Write Your message
        </textarea>
      </div>
    </form>
  );
};

export default FeedbackForm;
