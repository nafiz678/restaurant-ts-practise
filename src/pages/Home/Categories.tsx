import SectionTitle from "@/components/SectionTitle";
import { useKeenSlider } from "keen-slider/react";

import slide1 from "@/assets/home/slide1.jpg"
import slide2 from "@/assets/home/slide2.jpg"
import slide3 from "@/assets/home/slide3.jpg"
import slide4 from "@/assets/home/slide4.jpg"
import slide5 from "@/assets/home/slide5.jpg"

const Categories = () => {

        const [ref] = useKeenSlider<HTMLDivElement>({
          loop: true,
          mode: "free-snap",
          slides: {
            perView: 3,
            spacing: 5,
          },
        })

  return (
    <div className="w-10/12 mx-auto">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading="---From 11:00am to 10:00pm---"
      ></SectionTitle>

      <div ref={ref} className="keen-slider h-[405px] ">
        <div className="keen-slider__slide number-slide1">
          <img src={slide1} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slide2} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slide3} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slide4} alt="" />
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slide5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
