import "./ComfirmInfo.css";
import BookingInfo from "./comfirmInfo/BookingInfo";
import ServiceIcon from "./comfirmInfo/ServiceIcon";
import Process from "./comfirmInfo/Process";
import TitleLine from "./comfirmInfo/TitleLine";
import { Room } from '../../App';
import React from 'react';
interface ComfirmInfoProps {
  room:Room;
}

export default function ComfirmInfo(props:ComfirmInfoProps) {
  return (
    <div className="comfirmInfo">
      <TitleLine room={props.room}/>
      <ServiceIcon roomType={props.room.roomType}/>
      <BookingInfo />
      <Process />
    </div>
  );
}
