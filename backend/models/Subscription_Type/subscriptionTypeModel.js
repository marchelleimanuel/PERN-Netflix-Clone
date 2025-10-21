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
            field: 'id_subscription_type'
        },
        type : {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'type'
        },
        resolution: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'resolution'
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'price'
        },
        quality: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'quality'
        },
        supportedDevices: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'supported_devices'
        },
        devicesWatchAtTheSameTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'devices_watch_at_the_same_time'
        },
        downloadDevices: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'download_devices'
        },
        isSpatial : {
            type: DataTypes.STRING(1),
            allowNull: false,
            field: 'is_spatial'
        },
    },
    {
        timestamps: false,
        tableName: 'subscription_type'
    }
)

export default SubscriptionType;

