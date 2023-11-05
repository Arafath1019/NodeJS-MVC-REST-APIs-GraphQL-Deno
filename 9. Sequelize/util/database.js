const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'arafath101990100307adib', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;