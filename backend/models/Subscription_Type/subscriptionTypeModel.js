import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import Subscription from "../Subscription/subscriptionModel.js";

const SubscriptionType = db.define(
    'SubscriptionType',
    {
        id_subscription_type : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'subscription_type'
    }
)

export default SubscriptionType;

