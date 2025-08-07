import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const Watchlist = db.define(
    'Watchlist',
    {
        id_watchlist : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'watchlist'
    }
)

export default Watchlist;

