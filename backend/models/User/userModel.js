import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import Movies from "../Movies/moviesModel.js";
import Watch from "../Watch/watchModel.js";
import Watchlist from '../Watchlist/watchlistModel.js';
import UserSubscriptionDetails from "../User_Subscription_Details/userSubscriptionDetails.js";
import Subscription from "../Subscription/subscriptionModel.js";

const User = db.define(
    'User',
    {
        idUser : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            field: 'id_user'
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
        role : {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'User',
            field: 'role'
        },
        refreshToken : {
            type: DataTypes.STRING,
            field: 'refresh_token'
        }
    },
    {
        timestamps: true,
        createdAt: true,
        updatedAt: false,
        tableName: 'app_user'
    }
)

User.belongsToMany(Movies, {
    through: Watch,
    foreignKey: 'id_user',
    otherKey: 'id_movies'
})

User.belongsToMany(Movies, {
    through: Watchlist,
    foreignKey: 'id_user',
    otherKey: 'id_movies'
})

User.belongsToMany(Subscription, {
    through: UserSubscriptionDetails,
    foreignKey: 'id_user',
    otherKey: 'id_subscription',
})


export default User;

