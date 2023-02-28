const User = require('./user');
const Game = require('./Game');
const Genre = require('./Genre');
const Request = require('./Request');
const Console = require('./Console');
const Review = require('./Review');

User.hasOne(Game, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Game.belongsToMany(User, {
  foreignKey: 'user_id'
});

User.hasOne(Console, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Console.belongsToMany(User, {
  foreignKey: 'user_id'
});

User.hasMany(Request, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Request.belongsTo(User, {
    foreignKey: 'user_id',
});

Game.hasMany(Genre, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Genre.belongsToMany(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Console, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Console.belongsToMany(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Review, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Request, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Request.belongsTo(Game, {
    foreignKey: 'game_id'
});

Console.hasMany(Request, {
    foreignKey: 'console_id',
    onDelete: 'CASCADE'
});

Request.belongsTo(Console, {
    foreignKey: 'console_id'
});

module.exports = { User, Game, Genre, Request, Console, Review};