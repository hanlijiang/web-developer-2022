import "./Process.css";
import React from 'react';
export default function Process() {
  return (
    <div className="process">
      <h3>
        Booking process<hr></hr>
      </h3>
      <div className="process-info">
        <div className="process-box">
          <div>1</div>
          <p>Submit online reservation successfully</p>
        </div>
        <div className="process-box">
          <div>2</div>
          <p>
            The reservation notification will be sent by SMS (If you haven't
            received the SMS, please call to confirm)
          </p>
        </div>
        <div className="process-box">
          <div>3</div>
          <p>
            On the day of check-in, you can pay by cash or credit card with the
            reservation notice (only VISA, JCB, UnionPay cards are accepted)
          </p>
        </div>
      </div>
    </div>
  );
}
