import Movie from "../db/Movie.js";
import Type from "../db/Type.js";

export const getMovies = () => Movie.findAll({
    include: {
        model: Type,
        as: "type"
    }
});

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