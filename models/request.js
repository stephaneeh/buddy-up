const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {User, Game, Console} = require("../models");

class Request extends Model {}

Request.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references:{
        //         Model: User,
        //         key: 'id',
        //     }
        // },
        // user_email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references:{
        //         Model: User,
        //         key: 'id',
        //     }
        // },
        req_game: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{ 
                Model: Game,
                key: 'id',
            }
        },
        req_console: {
            type: DataTypes.STRING,
            allowNull: false, //required?
            references:{ 
                Model: Console,
                key: 'id',
            }
        },
        user_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: User,
                key: 'id',
            },
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