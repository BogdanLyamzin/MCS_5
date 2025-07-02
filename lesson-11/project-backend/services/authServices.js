import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

import User from "../db/User.js";

import { getMovies } from "./moviesServices.js";

import HttpError from "../helpers/HttpError.js";
import sendEmail from "../helpers/sendEmail.js";

import { createToken } from "../helpers/jwt.js";

const {APP_DOMAIN} = process.env;

const createVerifyEmail = ({email, verificationCode}) => ({
    to: email,
    subject: "Verify email",
    html: `<a href="${APP_DOMAIN}/api/auth/verify?verificationCode=${verificationCode}" target="_blank">Click verify email</a>`,
})

export const findUser = (query) =>
  User.findOne({
    where: query,
  });

export const registerUser = async (payload) => {
  const hashPassword = await bcrypt.hash(payload.password, 10);
  const verificationCode = nanoid();
  const user = await User.create({ ...payload, password: hashPassword, verificationCode });

  const verifyEmail = createVerifyEmail({email: payload.email, verificationCode});

  await sendEmail(verifyEmail);

  return user;
};

export const verifyUser = async verificationCode => {
    const user = await findUser({verificationCode});
    if(!user) throw HttpError(401, "Email not found or already verified");

    return user.update({verify: true, verificationCode: null});
}

export const resendVerifyUser = async email => {
    const user = await findUser({email});
    if(!user || user.verify) throw HttpError(401, "Email not found or already verified");

    const verifyEmail = createVerifyEmail({email, verificationCode: user.verificationCode});

    await sendEmail(verifyEmail);
}

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) throw HttpError(401, "Email or password invalid");

  if (!user.verify) throw HttpError(401, "Email not verified");

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, "Email or password invalid");

  const payload = {
    id: user.id,
  };

  const token = createToken(payload);
  user.token = token;
  await user.save();
  const movies = await getMovies({ owner: user.id });

  return {
    token,
    movies,
  };
};

export const logoutUser = async ({ email }) => {
  const user = await findUser({ email });
  if (!user) throw HttpError(401, "User not found");
  user.token = "";
  await user.save();
};
