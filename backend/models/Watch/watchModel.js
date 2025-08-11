import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const Watch = db.define(
    'Watch',
    {
        id_watch : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        // id_user : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // id_movies : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        last_watched_at : {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'watch'
    }
)


export default Watch;

