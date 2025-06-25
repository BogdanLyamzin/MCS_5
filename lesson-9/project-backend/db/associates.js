import Movie from "./Movie.js";
import Type from "./Type.js";

Type.hasMany(Movie, {
    foreignKey: "typeId",
    as: "movies"
});

Movie.belongsTo(Type, {
    foreignKey: "typeId",
    as: "type"
});