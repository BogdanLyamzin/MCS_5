import * as moviesServices from "../services/moviesServices.js";

import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";

const getMoviesController = async (req, res) => {
  const {id} = req.user;
  const result = await moviesServices.getMovies({owner: id});

  res.json(result);
};

const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const {id: owner} = req.user;
  const result = await moviesServices.getMovie({id, owner});

  if (!result) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(result);
};

const addMovieController = async (req, res) => {
  const {id} = req.user;
  const result = await moviesServices.addMovie({...req.body, owner: id});

  res.status(201).json(result);
};

const updateMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const {id: owner} = req.user;
  const result = await moviesServices.updateMovie({id, owner}, req.body);
  if (!result) {
    throw HttpError(404, `Movie with id=${id} not found`);
  }

  res.json(result);
};

const deleteMovieByIdController = async(req, res)=> {
    const { id } = req.params;
    const {id: owner} = req.user;
    const result = await moviesServices.deleteMovie({id, owner});
    if (!result) {
        throw HttpError(404, `Movie with id=${id} not found`);
      }
    
    res.json(result);
}

export default {
  getMoviesController: ctrlWrapper(getMoviesController),
  getMovieByIdController: ctrlWrapper(getMovieByIdController),
  addMovieController: ctrlWrapper(addMovieController),
  updateMovieByIdController: ctrlWrapper(updateMovieByIdController),
  deleteMovieByIdController: ctrlWrapper(deleteMovieByIdController),
};
