import React, { useRef, useState } from "react";

function Slider() {
  const maincontent = useRef(null);
  const [position, setPosition] = useState(0);
  const slideWidth = 500;

  const totalSlides = 3; // for example

  const handleNext = () => {
    if (position < totalSlides - 1) {
      setPosition((prev) => prev + 1);
      maincontent.current.style.transform = `translateX(-${
        (position + 1) * slideWidth
      }px)`;
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition((prev) => prev - 1);
      maincontent.current.style.transform = `translateX(-${
        (position - 1) * slideWidth
      }px)`;
    }
  };

  return (
    <div>
      <button id="prev" onClick={handlePrev}>Prev</button>
      <div
        id="maincontent"
        ref={maincontent}
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          width: "1500px", // 3 slides × 500px
        }}
      >
        <div style={{ width: "500px", background: "red" }}>Slide 1</div>
        <div style={{ width: "500px", background: "blue" }}>Slide 2</div>
        <div style={{ width: "500px", background: "green" }}>Slide 3</div>
      </div>
      <button id="next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Slider;
