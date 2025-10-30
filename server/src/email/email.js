import nodemailer from "nodemailer";
import dotenv from "dotenv";

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

export const sendConfirmationEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirmation d'inscription",
    html: `<p>Bienvenue sur notre site! Cliquez sur le lien suivant pour valider votre inscription : <a href=${process.env.API_URL}/user/verifyMail/${token}>Confirmer</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};
