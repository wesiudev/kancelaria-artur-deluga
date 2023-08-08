import nodemailer from "nodemailer";

const email = "pykrakapykpaka@gmail.com";
const pass = "PablO420!@#";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
