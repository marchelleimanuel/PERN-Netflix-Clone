import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const MoviesGenreDetails = db.define(
    'MoviesGenreDetails',
    {
        idMovies : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_movies'
        },
        idGenre : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_genre'
        },
    },
    {
        timestamps: false,
        tableName: 'movies_genre_details'
    }
)

export default MoviesGenreDetails;

