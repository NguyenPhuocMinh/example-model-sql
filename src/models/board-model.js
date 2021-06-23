'use strict';

const { Sequelize } = require('winext-repository').dataSequelize;

module.exports = {
  name: 'BoardModel',
  attributes: {
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    registerDate: { type: Sequelize.STRING },
    permissions: [Sequelize.STRING],
    //filter
    deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    createdAt: { type: Sequelize.DATE },
    createdBy: { type: Sequelize.STRING },
    updatedAt: { type: Sequelize.DATE },
    updatedBy: { type: Sequelize.STRING },
  },
  options: {
    tableName: 'boards'
  }
}