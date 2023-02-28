const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {User, Game, } = require("../models");

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_name: {
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
    },
    {sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "review",
    }
);

module.exports = Review;