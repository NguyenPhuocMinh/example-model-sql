'use strict';

const UserModel = require('./models/user-model');
const BoardModel = require('./models/board-model');

const models = [
  UserModel,
  BoardModel
];

module.exports = models;