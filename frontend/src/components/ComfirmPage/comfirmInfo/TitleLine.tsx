import { Room } from "../../../App";
import "./TitleLine.css";
import React from 'react';
interface TitleLineProps {
  room:Room;
}

export default function TitleLine(props:TitleLineProps) {
  return (
    <div className="titleLine">
      <h2>{props.room.roomType}</h2>
      <p>
        <span className="Guest">{props.room.person}</span>・
        <span className="Bed">{props.room.bed}</span>・breakfast・bathroom・
        <span className="Footage">{props.room.roomSize}</span>m<sup>2</sup>・weekdays(Mon-Thu)price:
        <span className="weekPrice">{props.room.price}</span> / weekend(Fri-Sun)price:
        <span className="holiPrice">€ {props.room.price+20}</span>
      </p>
    </div>
  );
}
