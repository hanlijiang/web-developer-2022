import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import RoomItem from "./RoomItem/RoomItem";
import "./AvailableRooms.css";
import { Room } from "../../../App";
import React from 'react';
export default function AvailableRooms() {

  const [roomsData, setRoomsData] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");
  useEffect(() => {
    fetch("FIREBASE_URL")
      .then((response) => {
        if(!response.ok){
          throw new Error('Something went wrong');
        }
        return response.json()})
      .then((data) => {

        let loadRooms: Room[] = [];

        for (const key in data) {
          //console.log(data[key]);//object iterate to array
          
          loadRooms.push({
            id: key,
            roomType: data[key].roomType,
            bed: data[key].bed,
            price: data[key].price,
            roomSize: data[key].roomSize,
            person: data[key].person
          });
        }

        setRoomsData(loadRooms);
        setIsLoading(false);
      })
      .catch((error) => {
        let message = "Unknown Error";
        if (error instanceof Error) {
          message = error.message;
        }
        setHttpError(message);
        setIsLoading(false);
      });
  }, []);

  let content;
  if(isLoading){
    content = <p>loading...</p>;
  }else if(httpError){
    content = <p className="error">{httpError}</p>
  }else{
    const roomList = roomsData.map((room) => (
      <RoomItem key={room.id} room={room}/>
    ));
    content = <ul>{roomList}</ul>;
  }
  
  return (
    <section className="availableRooms">
      <Card>{content}</Card>
    </section>
  );
}
