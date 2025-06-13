import Type from "../db/Type.js";
import Movie from "../db/Movie.js";

export const getTypes = ()=> Type.findAll({
    include: {
        model: Movie,
        as: "movies"
    }
});