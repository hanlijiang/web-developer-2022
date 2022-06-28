import { useState } from "react";
import { Link } from "react-router-dom";
import { Room } from "../../../../App";
import "./RoomItem.css";
import BedIcon from '@mui/icons-material/Bed';
import React from 'react';
interface RoomItemProps {
  room: Room;
}

export default function RoomItem(props: RoomItemProps) {
    
  const [height, setHeight] = useState({});
  return (
    <Link to="/room-page" state={props.room}>
      <div
        className="roomItem"
        onMouseEnter={() => setHeight({height:"80px"})}
        onMouseLeave={() => setHeight({height:"0"})}
      >
        <div className="roomItem-container"><BedIcon/>{props.room.roomType}</div>
        <div className="sidenav" style={height}>
          <p>week days €{props.room.price}</p>
          <p>weekend €{props.room.price+20}</p>
        </div>
      </div>
    </Link>
  );
}
