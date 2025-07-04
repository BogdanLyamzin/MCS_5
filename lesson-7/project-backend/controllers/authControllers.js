import * as authServices from "../services/authServices.js";

import ctrlWrapper from "../helpers/ctrlWrapper.js";

const registerController = async(req, res)=> {
    const newUser = await authServices.registerUser(req.body);

    res.status(201).json({
        email: newUser.email,
        username: newUser.username,
    })
}

export const loginController = async(req, res)=> {
    const token = await authServices.loginUser(req.body);

    res.json({token});
}

export default {
    registerController: ctrlWrapper(registerController),
    loginController: ctrlWrapper(loginController),
}