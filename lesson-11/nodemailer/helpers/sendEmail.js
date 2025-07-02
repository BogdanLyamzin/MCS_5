import nodemailer from "nodemailer";
import "dotenv/config";

const {UKR_NET_EMAIL, UKR_NET_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 887, 2525
    secure: true,
    auth: {
        user: UKR_NET_EMAIL,
        pass: UKR_NET_PASSWORD
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

/*
const payload = {
    to: "legawaw358@coasah.com",
    subject: "Test email",
    html: "<h1>Test email</h1>"
};
*/
const sendEmail = payload => {
    const email = {...payload, from: UKR_NET_EMAIL};
    return transport.sendMail(email);
}

export default sendEmail;