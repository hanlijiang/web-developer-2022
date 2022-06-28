import "./RoomImage.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderData } from "./room-info/SliderData";
import { useState,useRef, useEffect } from "react";
import HomePageLink from "../../global/HomePageLink";
import React from 'react';
interface RoomImageProps {
  onShowCart: () => void;
}

export default function RoomImage(props: RoomImageProps) {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const delay = 3500;
  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    //resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
      setCurrent((prevIndex) =>
          prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const sliderImg = SliderData.map((img, index) => {
    return (
      <div className={index === current ? "slide active" : "slide"} key={index}>
        {index === current && (
          <img src={img.image} alt="room image" className="slider-image" />
        )}
      </div>
    );
  });
  return (
    <div className="roomImage">
      <section className="slider">
        <ArrowBackIosIcon
          className="slider-left-arrow slider-arrow"
          onClick={prevImg}
        />
        <ArrowForwardIosIcon
          className="slider-right-arrow slider-arrow"
          onClick={nextImg}
        />
        <HomePageLink
          title="View other Room types"
          classname="slider-LinkBtn"
        />
        <button onClick={props.onShowCart}>Booking now</button>
        {sliderImg}
        
      </section>
    </div>
  );
}

