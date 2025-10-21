import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const MoviesCastDetails = db.define(
    'MoviesCastDetails',
    {
        idMovies: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_movies'
        },
        idMoviesCast : {
            primaryKey:true,
            type: DataTypes.STRING,
            allowNull: false,
            field: 'id_movies_cast'
        },
    },
    {
        timestamps: false,
        tableName: 'movies_cast_details'
    }
)

export default MoviesCastDetails;

