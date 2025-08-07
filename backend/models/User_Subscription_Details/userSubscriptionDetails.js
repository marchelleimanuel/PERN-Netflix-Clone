import { DataTypes } from "sequelize";
import db from "../../database/database.js";

const UserSubscriptionDetails = db.define(
    'UserSubscriptionDetails',
    {
        id_subscription : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_user : {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        start_subscription : {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_subscription: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'user_subscription_details'
    }
)



export default UserSubscriptionDetails;

