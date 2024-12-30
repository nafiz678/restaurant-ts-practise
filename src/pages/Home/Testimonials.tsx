import SectionTitle from "@/components/SectionTitle";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { ReviewProps } from "@/lib/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "./styles.css";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const Testimonials = () => {
  const [ratings, setRating] = useState<number>(0);
  const [reviews, setReviews] = useState<ReviewProps>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setReviews(data);
      });
  }, []);
  console.log(ratings, loading);

  return (
    <div className="mt-16">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="---What Our Clients Say---"
      ></SectionTitle>
      <div className="w-10/12 mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-9/12 mx-auto"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 flex flex-col items-center my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating || 0}
                  onChange={setRating}
                  isRequired
                />
                <p className="mt-4">{review.details}</p>
                <h3 className="text-3xl mt-4 text-orange-400  ">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
