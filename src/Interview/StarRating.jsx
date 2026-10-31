import React, { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const feedback = (rated) => {
    if (rated <= 2) {
      toast.success("Thank you for feedback. Will work on making it better.");
    } else if (rated <= 3) {
      toast.success("Thank you for feedback");
    } else {
      toast.success("Thank you for feedback. Keep supporting.");
    }
  };
  return (
    <>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <span
              key={index}
              className="text-4xl cursor-pointer mx-2"
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {index <= (hover || rating) ? (
                <span className="text-4xl cursor-pointer">&#9733;</span>
              ) : (
                <span className="text-4xl cursor-pointer">&#9734;</span>
              )}
            </span>
          );
        })}
      </div>
      <button
        onClick={() => feedback(rating)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Submit
      </button>
      <ToastContainer transition={Slide} position="top-right" autoClose={1000} />

    </>
  );
};

export default StarRating;
