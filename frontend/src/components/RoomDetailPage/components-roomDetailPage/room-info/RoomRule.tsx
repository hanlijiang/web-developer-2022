import { Room } from "../../../../App";
import "./RoomRule.css";
import React from 'react';
interface RoomRuleProps {
  room: Room;
}

export default function RoomRule(props:RoomRuleProps) {
  return (
    <div className="roomRule">
      <p>Week days(Mon.- Thu.) price:€ {props.room.price}</p>
      <p>Weekend(Fri.- Sun.) price:€ {props.room.price+20}</p>
      <p>Check-in: 15:00 ~ 19:00</p>
      <p>Check-out: 10:00</p>
    </div>
  );
}
