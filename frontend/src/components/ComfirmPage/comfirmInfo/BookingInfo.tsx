import './BookingInfo.css'
import React from 'react';
export default function BookingInfo() {
  return (
    <div>
      <h3>
        Booking Information<hr></hr>
      </h3>
      <ul className="roomList">
        <li>
          Check-in : 15:00 ~ 19:00.
          Check-out : 10:00
        </li>
        <li>Public parking is available nearby (reservation is not required) and costs EUR 7.50 per day.</li>
        <li>Non smoking room</li>
        <li>Any questions, please call 0677-8321155<br/>
            (service time: everyday 10:00 - 18:00)
        </li>
      </ul>
    </div>
  )
}
