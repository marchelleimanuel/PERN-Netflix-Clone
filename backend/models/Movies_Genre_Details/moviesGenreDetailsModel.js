import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const MoviesGenreDetails = db.define(
    'MoviesGenreDetails',
    {
        id_movies : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_genre : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'movies_genre_details'
    }
)

export default MoviesGenreDetails;

