const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {User, Game, Console, Review } = require("../models");

class Request extends Model {}

Request.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                Model: User,
                key: 'id',
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                Model: User,
                key: 'id',
            }
        },
        game: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{ 
                Model: Game,
                key: 'id',
            }
        },
        console: {
            type: DataTypes.STRING,
            allowNull: false, //required?
            references:{ 
                Model: Console,
                key: 'id',
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "request",
    }
);

module.exports = Request;