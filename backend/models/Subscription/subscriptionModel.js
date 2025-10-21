import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import SubscriptionType from "../Subscription_Type/subscriptionTypeModel.js";

const Subscription = db.define(
    'Subscription',
    {
        idSubscription : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            tableName: 'id_subscription'
        },
        idSubscriptionType : {
            type: DataTypes.INTEGER,
            allowNull: false,
            tableName: 'id_subscription_type'
        },
    },
    {
        timestamps: false,
        tableName: 'subscription'
    }
)

SubscriptionType.hasMany(Subscription, {
    foreignKey: {
        name: 'id_subscription_type'
    }
})


export default Subscription;

