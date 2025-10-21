import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const MovieCast = db.define(
    'MovieCast',
    {
        idMoviesCast : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            field: 'id_movies_cast'
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        photoUrl : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'photo_url'
        },
    },
    {
        timestamps: false,
        tableName: 'movie_cast'
    }
)

export default MovieCast;

