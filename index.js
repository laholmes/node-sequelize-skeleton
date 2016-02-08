var sequelize = new Sequelize('feedr', 'admin', ['password']);

var path = require('path')

module.exports = {
  'config':          path.resolve('config', 'database.json'),
  'migrations-path': path.resolve('db', 'migrate')
}