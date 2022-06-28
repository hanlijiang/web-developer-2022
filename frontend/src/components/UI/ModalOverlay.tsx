import { useState } from "react";
import { Room } from "../../App";
import ComfirmInfo from "../ComfirmPage/ComfirmInfo";
import GuestInfo from "../ComfirmPage/GuestInfo";
import HomePageLink from "../global/HomePageLink";
import "./ModalOverlay.css";
import React from 'react';
interface ModalOverlayProps {
  onHideCart: () => void;
  room: Room;
}
export interface IUserData {
  name: string;
  phone: string;
  email: string;
  checkinDate: string;
  checkoutDate: string;
  note: string;
  price: number;
}
export default function ModalOverlay(props: ModalOverlayProps) {
  const [didSubmit, setDidSubmit] = useState(false);
  const [userName, setUserName] = useState("");

  async function submitOrderhandler(userData: IUserData) {
    setUserName(userData.name);
    await fetch(
      "FIREBASE_URL",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
        }),
      }
    );
    setDidSubmit(true);
  }
  const modalContent = (
    <div className="modalOverlay">
      <GuestInfo
        onHideCart={props.onHideCart}
        onConfirm={submitOrderhandler}
        roomPrice={props.room.price}
      />
      <ComfirmInfo room={props.room} />
    </div>
  );
  const didSubmitModalContent = (
    <div className="sucessOverlay">
      <p>Dear {userName}<br/> Thanks for your Booking!</p>
      <HomePageLink title="close" classname="sucessOverlay-LinkBtn"/>
    </div>
  );

  return (
    <>
      {!didSubmit && modalContent}
      {didSubmit && didSubmitModalContent}
    </>
  );
}
