'use strict';

const { Sequelize } = require('winext-repository').dataSequelize;

module.exports = {
  name: 'BoardModel',
  attributes: {
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    register_date: { type: Sequelize.STRING },
    //filter
    deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    created_at: { type: Sequelize.DATE },
    created_by: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.DATE },
    updated_by: { type: Sequelize.STRING },
  },
  options: {
    tableName: 'boards',
    timestamps: false
  }
}