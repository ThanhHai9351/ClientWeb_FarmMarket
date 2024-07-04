import axios from "axios";

const sendMail = (email, title, message) => {
  axios
    .post(`${process.env.REACT_APP_BE}/mailer/sendMail`, {
      email: email,
      title: title,
      message: message,
    })
    .catch((err) => {
      console.log(err);
    });
};

export { sendMail };
