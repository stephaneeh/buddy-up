const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {Console, Review, Genre } = require("../models");

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
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{ 
                model: Genre,
                key: 'id',
            }
        },
        console: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{ 
                model: Console,
                key: 'id',
            }
        },
        review: {
            type: DataTypes.STRING,
            references:{ 
                model: Console,
                key: 'id',
            }
        },
        stars: {
            type: DataTypes.INTEGER,
        },
    }
);

module.exports = Game;