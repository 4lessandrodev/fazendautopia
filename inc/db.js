const mysql = require('mysql2');


//fonte https://www.npmjs.com/package/mysql2
const connection = mysql.createConnection({
  host: 'mysql17-farm76.kinghost.net',
  user: 'fazendautopia',
  database: 'fazendautopia',
  password: 'FARMVILLE01'
});

module.exports = connection;


/*
//fonte https://www.npmjs.com/package/mysql2
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fazendautopia',
  database: 'bdutopia',
  password: 'fazendautopia'
});
module.exports = connection;
*/