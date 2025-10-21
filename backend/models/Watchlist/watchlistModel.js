import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const Watchlist = db.define(
    'Watchlist',
    {
        idWatchlist : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            tableName: 'id_watchlist'
        }
    },
    {
        timestamps: false,
        tableName: 'watchlist'
    }
)

export default Watchlist;

