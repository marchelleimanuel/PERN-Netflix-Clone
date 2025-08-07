import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const MovieCast = db.define(
    'MovieCast',
    {
        id_movies_cast : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_url : {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'movie_cast'
    }
)

export default MovieCast;

