import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const Genre = db.define(
    'Genre',
    {
        id_genre : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'genre'
    }
)

export default Genre;

