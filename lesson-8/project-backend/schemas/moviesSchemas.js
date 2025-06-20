import Joi from "joi";

import {typeList, releaseYearMinValue} from "../constants/movies.js";

export const movieAddSchema = Joi.object({
    title: Joi.string().required(),
    director: Joi.string().required(),
    favorite: Joi.boolean(),
    typeId: Joi.number().required(),
    releaseYear: Joi.number().min(releaseYearMinValue).required(),
});

export const movieUpdateSchema = Joi.object({
    title: Joi.string(),
    director: Joi.string(),
    favorite: Joi.boolean(),
    typeId: Joi.number().required(),
    releaseYear: Joi.number().min(releaseYearMinValue),
});
