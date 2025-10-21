import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const Watch = db.define(
    'Watch',
    {
        idWatch : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            field: 'id_watch'
        },
        // id_user : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        // id_movies : {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        lastWatchedAt : {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'last_watched_at'
        },
    },
    {
        timestamps: false,
        tableName: 'watch'
    }
)


export default Watch;

