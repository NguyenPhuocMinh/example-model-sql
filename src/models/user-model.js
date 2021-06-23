'use strict';

const { Sequelize } = require('winext-repository').dataSequelize;

module.exports = {
  name: 'UserModel',
  attributes: {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    permissions: [Sequelize.STRING],
    //filter
    slug: { type: Sequelize.STRING },
    deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    created_at: { type: Sequelize.DATE },
    created_by: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.DATE },
    updated_by: { type: Sequelize.STRING },
  },
  options: {
    tableName: 'users',
    timestamps: false
  }
}