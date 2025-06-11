import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

import {typeList, releaseYearMinValue} from "../constants/movies.js";

const Movie = sequelize.define(
    "movie",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        type: {
            type: DataTypes.ENUM(...typeList),
            defaultValue: typeList[0]
        },
        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: releaseYearMinValue
            }
        }
    }
);

// Movie.sync();

export default Movie;