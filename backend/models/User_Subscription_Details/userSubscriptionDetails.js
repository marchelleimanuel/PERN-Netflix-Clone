import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const UserSubscriptionDetails = db.define(
    'UserSubscriptionDetails',
    {
        idSubscription : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_subscription'
        },
        idUser : {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
            field: 'id_user'
        },
        startSubscription : {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'start_subscription'
        },
        endSubscription: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'end_subscription'
        },
    },
    {
        timestamps: false,
        tableName: 'user_subscription_details'
    }
)



export default UserSubscriptionDetails;

