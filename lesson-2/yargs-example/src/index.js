import yargs from "yargs";

import { getMovies, getMovieById, addMovie, updateMovieById, deleteMovieById } from "./movies.js";

const invokeAction = async ({action, id, ...data})=> {
    switch(action) {
        case "list":
            const allMovies = await getMovies();
            return console.log(allMovies);
        case "getById":
            const oneMovie = await getMovieById(id);
            return console.log(oneMovie);
        case "addMovie":
            const newMovie = await addMovie(data);
            return console.log(newMovie);
        case "updateById":
            const updateMovie = await updateMovieById(id, data);
            return console.log(updateMovie);
        case "deleteById":
            const deleteMovie = await deleteMovieById(id);
            return console.log(deleteMovie);
        default:
            console.log("Unknown action");
    }
}

const {argv} = yargs(process.argv);
const {_, $0, ...actionData} = argv;
invokeAction(actionData);