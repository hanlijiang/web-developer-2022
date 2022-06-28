import "./Header.css";
import React from 'react';
export default function Header() {
  return (
    <div className="header">
      <div className="header-icon">
        <img className="header-icon1" src="images/homeIcon.jpg" alt="icon" />
        <img className="header-icon2" src="images/homeIcon2.jpg" alt="icon" />
      </div>
      <ul>
        <h1>我家旅店。My Home</h1>
        <li><a className ="header-address" href="https://www.google.com/maps/place/Digital+Campus+Vorarlberg/@47.3928282,9.2075575,8.31z/data=!4m5!3m4!1s0x0:0xe2e25709560c2fd!8m2!3d47.2399652!4d9.5974686" target="_blank" rel="noreferrer"> Widnau 10, 6800 Feldkirch AT</a></li>
        <br />
        <li><a href="tel:+4733378901">+43 111 222 333 44</a></li>
        <li><a href="mailto:my-home@hotel.com">my-home@hotel.com</a></li>
      </ul>
    </div>
  );
}
