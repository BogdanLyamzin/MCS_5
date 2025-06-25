import bcrypt from "bcrypt";

import User from "../db/User.js";

import {getMovies} from "./moviesServices.js";

import HttpError from "../helpers/HttpError.js";

import { createToken } from "../helpers/jwt.js";

export const findUser = query => User.findOne({
    where:  query,
})

export const registerUser = async payload => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({...payload, password: hashPassword});
}

export const loginUser = async ({email, password})=> {
    const user = await User.findOne({
        where: {
            email,
        }
    });
    if(!user) throw HttpError(401, "Email or password invalid");

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) throw HttpError(401, "Email or password invalid");

    const payload = {
        id: user.id,
    };

    const token = createToken(payload);
    user.token = token;
    await user.save();
    const movies = await getMovies({owner: user.id});

    return {
        token,
        movies,
    };
}

export const logoutUser = async ({email})=> {
    const user = await findUser({email});
    if(!user) throw HttpError(401, "User not found");
    user.token = "";
    await user.save();
}