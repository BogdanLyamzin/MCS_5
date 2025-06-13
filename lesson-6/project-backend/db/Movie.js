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
        releaseYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: releaseYearMinValue
            }
        },
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            references: {
                model: "types",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        }
    }
);

// Movie.sync({alter: true});

export default Movie;