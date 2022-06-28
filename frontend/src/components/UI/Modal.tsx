import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import { Room } from "../../App";
import React from 'react';
interface ModalProps {
  onHideCart: ()=>void;
  room:Room;
}
interface BackdropProps {
    onHideCart: ()=>void;
}
  
function Backdrop(props:BackdropProps) {
  return <div className="backdrop" onClick={props.onHideCart}></div>;
}

const portalElement = document.getElementById("overlay") as HTMLElement;

export default function Modal(props:ModalProps) {
  
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onHideCart={props.onHideCart} room={props.room}/>,portalElement)}
    </Fragment>
  );
}
