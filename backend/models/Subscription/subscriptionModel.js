import { DataTypes } from "sequelize";
import db from "../../database/database.js";
import SubscriptionType from "../Subscription_Type/subscriptionTypeModel.js";

const Subscription = db.define(
    'Subscription',
    {
        id_subscription : {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_subscription_type : {
            type: DataTypes.INTEGER,
            allowNull: false
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

