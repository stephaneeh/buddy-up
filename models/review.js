const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
        author: {
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
    }
);

module.exports = Review;