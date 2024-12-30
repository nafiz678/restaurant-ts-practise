import "./styles.css";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MutableRefObject } from "react";
import slide1 from "@/assets/home/01.jpg";
import slide2 from "@/assets/home/02.jpg";
import slide3 from "@/assets/home/03.png";
import slide4 from "@/assets/home/04.jpg";
import slide5 from "@/assets/home/05.png";
import slide6 from "@/assets/home/06.png"; 

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current)
            mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(
          Math.min(slider.track.details.maxIdx, next)
        );
      });
    });
  };
}

export default function Banner() {
  const [sliderRef, instanceRef] =
    useKeenSlider<HTMLDivElement>({
      initial: 0,
    });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider h-screen">
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
        <div className="keen-slider__slide number-slide1">
          <img src={slide6} alt="" />
        </div>
      </div>

      <div
        ref={thumbnailRef}
        className="keen-slider thumbnail"
      >
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
        <div className="keen-slider__slide number-slide1">
          <img src={slide6} alt="" />
        </div>
      </div>
    </>
  );
}
