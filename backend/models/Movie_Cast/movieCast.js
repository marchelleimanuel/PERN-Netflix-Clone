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
            tableName: 'id_movies_cast'
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            tableName: 'name'
        },
        photoUrl : {
            type: DataTypes.STRING,
            allowNull: false,
            tableName: 'photo_url'
        },
    },
    {
        timestamps: false,
        tableName: 'movie_cast'
    }
)

export default MovieCast;

