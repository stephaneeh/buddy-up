const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User } = require("../models");

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // genre: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references:{ 
        //         model: Genre,
        //         key: 'id',
        //     }
        // },
        // console: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     references:{ 
        //         model: Console,
        //         key: 'id',
        //     }
        // },
        // review: {
        //     type: DataTypes.STRING,
        //     references:{ 
        //         model: Review,
        //         key: 'id',
        //     }
        // },
        // stars: {
        //     type: DataTypes.INTEGER,
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: User,
              key: 'id',
            },
        },
    },
    {sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "game",
    }
);

module.exports = Game;