import * as fs from "node:fs/promises";
import * as path from "node:path";
import { nanoid } from "nanoid";

const moviespath = path.resolve("db", "movies.json");

const updateMovie = movies => fs.writeFile(moviespath, JSON.stringify(movies, null, 2));

export const getMovies = async()=> {
    const data = await fs.readFile(moviespath, "utf-8");
    return JSON.parse(data);
}

export const getMovieById = async id => {
    const movies = await getMovies();
    const result = movies.find(item => item.id === id);
    return result || null;
}

export const addMovie = async data => {
    const movies = await getMovies();
    const newMovie = {
        id: nanoid(),
        ...data,
    };
    movies.push(newMovie);
    await updateMovie(movies);
    return newMovie;
}

export const updateMovieById = async(id, data)=> {
    const movies = await getMovies();
    const idx = movies.findIndex(item => item.id === id);
    if(idx === -1) return null;
    movies[idx] = {...movies[idx], ...data};
    await updateMovie(movies);
    return movies[idx];
}

export const deleteMovieById = async id => {
    const movies = await getMovies();
    const idx = movies.findIndex(item => item.id === id);
    if(idx === -1) return null;
    const [result] = movies.splice(idx, 1);
    await updateMovie(movies);
    return result;
}