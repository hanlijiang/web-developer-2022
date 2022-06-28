import { Room } from "../../../../App";
import "./RoomTitle.css";
import React from 'react';
interface RoomTitleProps {
  room: Room;
}

export default function RoomTitle(props:RoomTitleProps) {
  
  return (
    <div className="roomTitle">
      <h2>{props.room.roomType}</h2>
      <p>{props.room.bed}・including breakfast・{props.room.roomSize}m<sup>2</sup></p>
    </div>
  );
}
