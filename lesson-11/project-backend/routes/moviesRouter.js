import express from "express";

import moviesControllers from "../controllers/moviesControllers.js";

import validateBody from "../helpers/validateBody.js";

import { movieAddSchema, movieUpdateSchema } from "../schemas/moviesSchemas.js";

import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesControllers.getMoviesController);

moviesRouter.get("/:id", moviesControllers.getMovieByIdController);

// upload.fields([{name: "poster", maxCount: 1}, {name: "subposters", maxCount: 6}]);
// upload.array("poster", 8);
moviesRouter.post(
  "/",
  upload.single("poster"),
  validateBody(movieAddSchema),
  moviesControllers.addMovieController
);

moviesRouter.put(
  "/:id",
  validateBody(movieUpdateSchema),
  moviesControllers.updateMovieByIdController
);

moviesRouter.delete("/:id", moviesControllers.deleteMovieByIdController);

export default moviesRouter;
