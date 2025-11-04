import nodemailer from "nodemailer";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log(process.env.EMAIL_USER);
// async function sendMail() {
//   const info = await transporter.sendMail({
//     from: "tonmail@gmail.com",
//     to: "florianwys62@icloud.com",
//     subject: "Coucou",
//     text: "Enculé",
//   });
// }

// setInterval(sendMail, 1000);

// export const sendConfirmationEmail = async (email, token) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Confirmation d'inscription",
//     html: `<p>Bienvenue sur notre site! Cliquez sur le lien suivant pour valider votre inscription : <a href=${process.env.API_URL}/user/verifyMail/${token}>Confirmer</a></p>`,
//   };

//   await transporter.sendMail(mailOptions);
// };

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendConfirmationEmail = async (email, token) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_SENDER,
    subject: "Confirmation d'inscription",
    html: `<p>Bienvenue sur notre site!
Cliquez sur le lien suivant pour valider votre inscription :
<a href=${
      process.env.MODE === "development"
        ? process.env.API_URL
        : process.env.DEPLOY_BACK_URL
    }/user/verifyMail/${token}>Confirmer</a></p>`,
  };

  try {
    await sgMail.send(msg);
    console.log("Mail envoyé à " + email);
  } catch (error) {
    console.error("Erreur envoi email: ", error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
