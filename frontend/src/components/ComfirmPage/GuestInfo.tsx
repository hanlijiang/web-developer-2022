import { FormEvent, useRef, useState } from "react";
import { IUserData } from "../UI/ModalOverlay";
import DatePicker from "./comfirmInfo/DatePicker";
import "./GuestInfo.css";
import React from 'react';
interface GuestInfoProps {
  onHideCart: () => void;
  roomPrice: number;
  onConfirm: (userData: IUserData) => void;
}

function isEmpty(value: string) {
  return value.trim() === "";
}

function isTel(value: string) {
  return !isNaN(parseInt(value));
}

function isEmail(value: string) {
  const reg =
    /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  return reg.test(value);
}

export default function GuestInfo(props: GuestInfoProps) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkinDate, setCheckinDate] = useState(false);
  const [checkoutDate, setCheckoutDate] = useState(false);
  const [checkinDateValue, setCheckinDateValue] = useState<string>("");
  const [checkoutDateValue, setCheckoutDateValue] = useState<string>("");

  function getValuefc(day: any) {
    setTotalPrice(0);
    

    if (day[0] !== null && day[1] !== null && day[0].toString() !== day[1].toString()) {
      
      setCheckinDateValue(`${day[0].getDate()}/${day[0].getMonth()+1}/${day[0].getFullYear()}`);
      setCheckoutDateValue(`${day[1].getDate()}/${day[1].getMonth()+1}/${day[1].getFullYear()}`);

      let daysArr: number[] = [];
      const startDay = day[0].getDay();
      const endDay = day[1].getDay();
      let weekdays = 0;
      let weekenddays = 0;
      let i: any;

      if (startDay !== endDay) {
        for (i = startDay; i < 8; i++) {
          if (i === 7) {
            i = 0;
          }
          daysArr.push(i);
          if (i === endDay) {
            break;
          }
        }
        if (daysArr[0] !== 6 && daysArr.includes(5 && 6)) {
          weekenddays += 1;
        }
        if (daysArr[0] !== 0 && daysArr.includes(0 && 6)) {
          weekenddays += 1;
        }
        weekdays = daysArr.length - 1 - weekenddays;
      } else {
        weekenddays = 2;
        weekdays = 5;
      }
      setTotalPrice(
        props.roomPrice * weekdays + (props.roomPrice + 20) * weekenddays
      );
      setCheckinDate(true);
      setCheckoutDate(true);
      
    }
  }

  const [formInputsValid, setFormInputsValid] = useState({
    name: true,
    phone: true,
    email: true,
    checkinDate: true,
    checkoutDate: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const noteInputRef = useRef<HTMLTextAreaElement | null>(null);

  async function confirmHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    //validate user input
    //debugger;
    const enteredName = nameInputRef.current ? nameInputRef.current.value : "";
    const enteredPhone = phoneInputRef.current
      ? phoneInputRef.current.value
      : "";
    const enteredEmail = emailInputRef.current
      ? emailInputRef.current.value
      : "";
    const enteredNote = noteInputRef.current ? noteInputRef.current.value : "";

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = isTel(enteredPhone);
    const enteredEmailIsValid = isEmail(enteredEmail);
    const enteredCheckinIsValid = checkinDate;
    const enteredCheckoutIsValid = checkoutDate;

    setFormInputsValid({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      email: enteredEmailIsValid,
      checkinDate: enteredCheckinIsValid,
      checkoutDate: enteredCheckoutIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredEmailIsValid &&
      enteredCheckinIsValid &&
      enteredCheckoutIsValid;

    if (!formIsValid) {
      return;
    }
    
    //send to backend
    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      email: enteredEmail,
      checkinDate: checkinDateValue,
      checkoutDate: checkoutDateValue,
      note: enteredNote,
      price: totalPrice
    });

    
    await fetch(
      "http://localhost:5000/send-email",
       {
        headers: {  
          'Content-Type': 'application/json'
        },
         method: "POST",
         body: JSON.stringify({
          'name': enteredName,
          'email': enteredEmail,
          'checkinDate': checkinDateValue,
          'checkoutDate': checkoutDateValue,
         }),
    
       }
     ).then( (response) => {
      console.log(response);
   })
   .catch((error) => {
    console.log('Error', error)
   });
   
    

  }

  return (
    <form onSubmit={confirmHandler}>
      <div>
        <div className={`control ${formInputsValid.name ? "" : "invalid"}`}>
          <label htmlFor="name">* Name</label>
          <input type="text" id="name" ref={nameInputRef} />
         
        </div>
        <div className={`control ${formInputsValid.phone ? "" : "invalid"}`}>
          <label htmlFor="phone">* Phone</label>
          <input type="text" id="phone" ref={phoneInputRef} />
  
        </div>
        <div className={`control ${formInputsValid.email ? "" : "invalid"}`}>
          <label htmlFor="email">* E-mail</label>
          <input type="text" id="email" ref={emailInputRef} />
          
        </div>
        <div className="control">
          <DatePicker getValue={getValuefc} />
          {!formInputsValid.checkinDate && (
            <p className="datepickerNote">Please choose an available date!</p>
          )}
        </div>
        <div className="control text-note">
          <label htmlFor="name">Note</label>
          <textarea
            ref={noteInputRef}
            rows={6}     
            name="comment"
            form="usrform"
            placeholder="Your special needs ..."
          ></textarea>
        </div>
      </div>
      <div>
        <hr></hr>
        <div className="guestInfo-total">
          <p>Total</p>
          <span className="guestInfo-price">€ {totalPrice}</span>
        </div>
        <div className="guestInfo-btn">
          <button
            className="button-cancel"
            type="button"
            onClick={props.onHideCart}
          >
            Cancel
          </button>
          <button className="button-comfirm">Confirm</button>
        </div>
      </div>
    </form>
  );
}
