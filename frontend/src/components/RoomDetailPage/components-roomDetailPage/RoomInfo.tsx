import { Room } from "../../../App";
import ServiceIcon from "../../ComfirmPage/comfirmInfo/ServiceIcon";
import RoomOffer from "./room-info/RoomOffer";
import RoomRule from "./room-info/RoomRule";
import RoomTitle from "./room-info/RoomTitle";
import "./RoomInfo.css";
import * as React from "react";
import WeatherDatePicker from "./room-info/WeatherDatePicker";

interface RoomInfoProps {
  room: Room;
}

export default function RoomInfo(props: RoomInfoProps) {
 
  return (
    <div className="roomInfo">
      <RoomTitle room={props.room} />
      <RoomRule room={props.room} />
      <RoomOffer room={props.room} />
      <ServiceIcon roomType={props.room.roomType} />
      <WeatherDatePicker />
    </div>
  );
}
