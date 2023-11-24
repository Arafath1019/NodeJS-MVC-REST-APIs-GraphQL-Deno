const Sequelize = require('sequelize');

const sequelize = new Sequelize('database-name', 'database-user', 'database-password', {
    host: 'database-host',
    dialect: 'database-type'
});

module.exports = sequelize;
