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

Game.hasMany(User, {
  foreignKey: 'user_id',
});

User.hasOne(Console, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Console.hasMany(User, {
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

Genre.hasMany(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Console, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Console.hasMany(Game, {
    foreignKey: 'game_id'
});

Game.hasMany(Review, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Game, {
    foreignKey: 'game_id'
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

Game.hasMany(Request, {
    foreignKey: 'req_game',
    onDelete: 'CASCADE'
});

Request.belongsTo(Game, {
    foreignKey: 'req_game'
});

Console.hasMany(Request, {
    foreignKey: 'req_console',
    onDelete: 'CASCADE'
});

Request.belongsTo(Console, {
    foreignKey: 'req_console'
});

module.exports = { User, Game, Console, Request, Genre, Review };