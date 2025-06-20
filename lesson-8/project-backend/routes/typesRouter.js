import express from "express";

import typesControllers from "../controllers/typesControllers.js";

import validateBody from "../helpers/validateBody.js";

const typesRouter = express.Router();

typesRouter.get("/", typesControllers.getTypesController);

export default typesRouter;