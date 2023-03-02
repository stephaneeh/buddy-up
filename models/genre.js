const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Game } = require("../models");


class Genre extends Model {}

Genre.init(
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
    game_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Game,
            key: 'id',
        },
    }
    },
    {sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "genre",
    }
);

module.exports = Genre;