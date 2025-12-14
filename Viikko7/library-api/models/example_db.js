const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'example_user',
  password: 'example_password',
  database: 'library'
});

module.exports = connection;