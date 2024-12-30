import { reviewProp } from "@/lib/type";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import quote from "@/assets/text-quotes-svgrepo-com.svg"



const SwiperSlider: React.FC<reviewProp> = ({ review }) => {



  const { details, name, rating } = review;
  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <Rating
          style={{ maxWidth: 180 }}
          value={rating}
          onChange={setRating}
          isRequired
        />
        <div className="h-28 w-28 mt-6">
          <img
            src={quote}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div>
            <p>{details}</p>
            <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;
