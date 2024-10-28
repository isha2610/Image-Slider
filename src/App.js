import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./App.css";
// import car1 from "./components/car1.jpeg";
// import car2 from "./components/car2.jpeg";
// import car3 from "./components/car3.jpeg";
// import car4 from "./components/car4.jpeg";
// import car5 from "./components/car5.jpeg";

import car1 from "./components/car-1.jpg";
import car2 from "./components/car-2.jpg";
import car3 from "./components/car-3.jpg";
import car4 from "./components/car-4.jpg";
import car5 from "./components/car-5.jpg";


const IMAGES = [car1, car2, car3, car4, car5];

export default function App() {
  let [sliderIndex, setSlider] = useState(0);

  function showNextImage(){
    setSlider((sliderIndex===IMAGES.length -1 )?  sliderIndex = 0 : sliderIndex+1);
    return sliderIndex;
  }

  function showPrevImage(){
    setSlider((sliderIndex===0)? sliderIndex = IMAGES.length-1: sliderIndex-1);
    return sliderIndex;
  }

  return (
    <div className="imageComponent">
      <div className="image">
      {/* style={{translate: `${-100*sliderIndex}%`}} */}
        <img src={IMAGES[sliderIndex]} alt="this is slider"/>
      </div>
      <div>
        <button className="btn" onClick={showNextImage} style={{left:0}}>
          <ArrowBigLeft />
        </button>
        <button className="btn" onClick={showPrevImage} style={{right:0}}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}
