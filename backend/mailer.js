const nodemailer = require("nodemailer");
let guestName;
let guestEmail="";
let guestCheckinDate;
let guestCheckoutDate;
const mailer = {
  sendEmail: async (data) => {
    try {
      guestName = data.name;
      guestEmail = data.email;
      guestCheckinDate = data.checkinDate;
      guestCheckoutDate = data.checkoutDate;

      const htmlToSend=`
        <h1>Dear ${guestName},</h1>
        <h2>thanks! Your booking is confirmed at My Home.</h2>
        <p>check-in:${guestCheckinDate} from 14:00 to 20:00</p>
        <p>check-out:${guestCheckoutDate} from 08:00 to 10:00</p>
        <br>
        <p>Address:Widnau 10, 6800 Feldkirch AT</p>
        <p>Phone:+43 111 222 333 44</p>
        <p>E-mail:my-home@hotel.com</p>
      `;
    
    if(guestEmail!==""){
     
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "chaoslifeee@gmail.com",
          pass: "fxqvmqjrxfanowmn",
        },
      });
      
      transporter
        .sendMail({
          from: "test@gmail.com",
          to: guestEmail,
          subject: "My Home Hotel",
          html: htmlToSend
        })
        .then((info) => {
          console.log({ info });
        })
        .catch(console.error);
    }
      return { status: 200, statusText: "it worked" };
    } catch (error) {
      return { status: 500, statusText: "oh no" };
    }
  },
};

module.exports = mailer;
