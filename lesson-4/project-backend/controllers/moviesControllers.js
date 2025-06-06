import * as moviesServices from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getMoviesController = async (req, res) => {
  const result = await moviesServices.getMovies();

  res.json(result);
};

const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await moviesServices.getMovieById(id);

  if (!result) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(result);
};

const addMovieController = async (req, res) => {
  const result = await moviesServices.addMovie(req.body);

  res.status(201).json(result);
};

const updateMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await moviesServices.updateMovieById(id, req.body);
  if (!result) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(result);
};

const deleteMovieByIdController = async(req, res)=> {
    const { id } = req.params;
    const result = await moviesServices.deleteMovieById(id);
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
      }
    
    // res.status(204).send();
    res.json(result);
}

export default {
  getMoviesController: ctrlWrapper(getMoviesController),
  getMovieByIdController: ctrlWrapper(getMovieByIdController),
  addMovieController: ctrlWrapper(addMovieController),
  updateMovieByIdController: ctrlWrapper(updateMovieByIdController),
  deleteMovieByIdController: ctrlWrapper(deleteMovieByIdController),
};
