import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const Genre = db.define(
    'Genre',
    {
        idGenre : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            tableName: 'id_genre'
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            tableName: 'name'
        },
    },
    {
        timestamps: false,
        tableName: 'genre'
    }
)

export default Genre;

