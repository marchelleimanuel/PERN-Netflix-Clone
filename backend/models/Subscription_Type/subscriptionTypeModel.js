import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import Subscription from "../Subscription/subscriptionModel.js";

const SubscriptionType = db.define(
    'SubscriptionType',
    {
        idSubscriptionType : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            tableName: 'id_subscription_type'
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            tableName: 'name'
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false,
            tableName: 'price'
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false,
            tableName: 'description'
        },
    },
    {
        timestamps: false,
        tableName: 'subscription_type'
    }
)

export default SubscriptionType;

