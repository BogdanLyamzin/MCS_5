import * as authServices from "../services/authServices.js";
import { getMovies } from "../services/moviesServices.js";

import ctrlWrapper from "../helpers/ctrlWrapper.js";

const registerController = async(req, res)=> {
    const newUser = await authServices.registerUser(req.body);

    res.status(201).json({
        email: newUser.email,
        username: newUser.username,
    })
}

export const loginController = async(req, res)=> {
    console.log(req.body);
    const token = await authServices.loginUser(req.body);

    res.json({token});
}

export const getCurrentController = async (req, res)=> {
    const {username, email, id} = req.user;
    const movies = await getMovies({owner: id});

    res.json({
        username,
        email,
        movies,
    });
}

export const logoutController = async(req, res)=> {
    await authServices.logoutUser(req.user);

    res.json({
        message: "Logout successfully"
    })
}

export default {
    registerController: ctrlWrapper(registerController),
    loginController: ctrlWrapper(loginController),
    getCurrentController: ctrlWrapper(getCurrentController),
    logoutController: ctrlWrapper(logoutController),
}