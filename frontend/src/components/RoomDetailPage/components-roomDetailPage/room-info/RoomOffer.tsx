import { Room } from "../../../../App";
import "./RoomOffer.css";
import React from 'react';
interface RoomOfferProps{
  room:Room;
}

export default function RoomOffer(props:RoomOfferProps) {
  return (
    <ul className="roomOffer">
      <li>{props.room.roomType} is only for {props.room.person}</li>
      <li>{props.room.bed} and private bathroom</li>
      <li>towels, shampoo, shower gel and hair dryer</li>
      <li>air-condition and WIFI in the room</li>
    </ul>
  );
}
