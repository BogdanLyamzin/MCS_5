import Movie from "../db/Movie.js";
import Type from "../db/Type.js";

export const getMovies = (query) => Movie.findAll({
    where: query,
    include: {
        model: Type,
        as: "type"
    }
});

export const getMovie = query => Movie.findOne({
    where: query
});

export const addMovie = payload => Movie.create(payload);

export const updateMovie = async (query, data)=> {
    const movie = await getMovie(query);
    if(!movie) return null;

    await movie.update(data);
    return movie;
}

export const deleteMovie = async query => {
    const movie = await getMovie(query);
    if(!movie) return null;
    
    await movie.destroy();
    return movie;
}