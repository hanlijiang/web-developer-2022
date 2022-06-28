import "./RoomPage.css";
import RoomImage from "./components-roomDetailPage/RoomImage";
import RoomInfo from "./components-roomDetailPage/RoomInfo";
import Modal from "../UI/Modal";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from 'react';

export default function RoomPage() {
  const [showCart, setShowCart] = useState(false);

  function hideCartHandler() {
    setShowCart(false);
  }
  function showCartHandler() {
    setShowCart(true);
  }
  const location = useLocation();
  const targetRoomInfo = location.state as any;

  return (
    <div className="roomPage">
      {showCart &&<Modal onHideCart={hideCartHandler} room={targetRoomInfo}/>} 
      <RoomInfo room={targetRoomInfo}/>
      <RoomImage onShowCart={showCartHandler} />
    </div>
  )
}
