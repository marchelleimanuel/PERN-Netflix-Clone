import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const MoviesCastDetails = db.define(
    'MoviesCastDetails',
    {
        id_movies : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_movies_cast : {
            primaryKey:true,
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'movies_cast_details'
    }
)

export default MoviesCastDetails;

