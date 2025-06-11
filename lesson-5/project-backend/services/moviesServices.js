import * as fs from "node:fs/promises";
import * as path from "node:path";
import { nanoid } from "nanoid";

import Movie from "../db/Movie.js";
import { where } from "sequelize";

const moviespath = path.resolve("db", "movies.json");

const updateMovie = movies => fs.writeFile(moviespath, JSON.stringify(movies, null, 2));

export const getMovies = () => Movie.findAll();

export const getMovieById = id => Movie.findByPk(id);

// export const getMovieById = id => Movie.findOne({
//     where: {
//         id
//     }
// })

export const addMovie = payload => Movie.create(payload);

export const updateMovieById = async (id, data)=> {
    const movie = await getMovieById(id);
    if(!movie) return null;

    await movie.update(data);
    return movie;
}

export const deleteMovieById = async id => {
    const movie = await getMovieById(id);
    if(!movie) return null;
    
    await movie.destroy();
    return movie;
}