import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const UserSubscriptionDetails = db.define(
    'UserSubscriptionDetails',
    {
        idSubscription : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            tableName: 'id_subscription'
        },
        idUser : {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
            tableName: 'id_user'
        },
        startSubscription : {
            type: DataTypes.DATE,
            allowNull: false,
            tableName: 'start_subscription'
        },
        endSubscription: {
            type: DataTypes.DATE,
            allowNull: false,
            tableName: 'end_subscription'
        },
    },
    {
        timestamps: false,
        tableName: 'user_subscription_details'
    }
)



export default UserSubscriptionDetails;

