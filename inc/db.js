const mysql = require('mysql2');

//fonte https://www.npmjs.com/package/mysql2
const connection = mysql.createConnection({
  host: 'mysql.fazendautopia.com',
  user: 'root',
  database: 'fazendautopia',
  password: 'FARMVILLE01'
});

module.exports = connection;

/*

const mysql = require('mysql2');

//fonte https://www.npmjs.com/package/mysql2
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fazendautopia',
  password: 'admin'
});

module.exports = connection;

*/