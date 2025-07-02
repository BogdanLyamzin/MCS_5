import express from "express";

import authControllers from "../controllers/authControllers.js";

import validateBody from "../helpers/validateBody.js";

import { authRegisterSchema, authEmailSchema, authLoginSchema } from "../schemas/authSchemas.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(authRegisterSchema),
  authControllers.registerController
);

authRouter.get("/verify", authControllers.verifyController);

authRouter.post("/verify", validateBody(authEmailSchema), authControllers.resendVerifyController);

authRouter.post(
  "/login",
  validateBody(authLoginSchema),
  authControllers.loginController
);

authRouter.get("/current", authenticate, authControllers.getCurrentController);

authRouter.post("/logout", authenticate, authControllers.logoutController);

export default authRouter;
