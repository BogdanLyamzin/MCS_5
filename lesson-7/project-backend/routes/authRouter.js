import express from "express";

import authControllers from "../controllers/authControllers.js";

import validateBody from "../helpers/validateBody.js";

import { authRegisterSchema, authLoginSchema } from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(authRegisterSchema),
  authControllers.registerController
);

authRouter.post(
  "/login",
  validateBody(authLoginSchema),
  authControllers.loginController
);

export default authRouter;
