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
        id_user : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username : {
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        role : {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number : {
            type: DataTypes.STRING,
            allowNull: false
        },
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

