import Joi from "joi";

import { emailRegexp } from "../constants/auth.js";

const email = Joi.string().pattern(emailRegexp).required();
const password = Joi.string().min(6).required();

export const authRegisterSchema = Joi.object({
    username: Joi.string().required(),
    email,
    password,
});

export const authEmailSchema = Joi.object({
    email,
})

export const authLoginSchema = Joi.object({
    email,
    password,
});