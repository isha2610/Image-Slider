import React from "react";
import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Image } from "lucide-react";
import { Circle, CircleDot } from "lucide-react";
import "./Slider.css";
import car1 from "./components/car-1.jpg";
import car2 from "./components/car-2.jpg";
import car3 from "./components/car-3.jpg";
import car4 from "./components/car-4.jpg";
import car5 from "./components/car-5.jpg";

const IMAGES = [car1, car2, car3, car4, car5];

export default function Slider() {
  let [sliderIndex, setSlider] = useState(0);

  function showNextImage() {
    setSlider(
      sliderIndex === IMAGES.length - 1 ? (sliderIndex = 0) : sliderIndex + 1
    );
    return sliderIndex;
  }

  function showPrevImage() {
    setSlider(
      sliderIndex === 0 ? (sliderIndex = IMAGES.length - 1) : sliderIndex - 1
    );
    return sliderIndex;
  }

  useEffect(()=>{
    const slideClear = setInterval(()=>{
        showNextImage()
    }, 2000)
    return () => clearInterval(slideClear);
  }, [sliderIndex])

  return (
    
    <div className="slider">
        {
            IMAGES.map((img, i)=>(
                <div>
                <div className={`slider-image ${sliderIndex===i?"block":"hidden"}`} key={i}>
                    <img src={IMAGES[sliderIndex]} alt="this is slider" style={{ width: "100%", height: "80vh" }} />
                </div>
                <div className="btn">
                    <div>
                        <button className="btn" onClick={showNextImage} style={{ left: 0 }}><ArrowBigLeft /></button>
                        <button className="btn" onClick={showPrevImage} style={{ right: 0 }}><ArrowBigRight /></button>
                    </div>
                </div>
                </div>
            ))
        }
        <div className="dots-container">
            {
                IMAGES.map((_, i)=>(
                    <button onClick={() => {setSlider(sliderIndex)}} className="dot-btn" key={i}>{i===sliderIndex?<CircleDot/>:<Circle/>}</button>
                ))
            }
        </div>

    </div>
  );
}
