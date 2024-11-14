const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('xii nao conectou com o banco de dados:', err);
  } else {
    console.log('deu bom krai entro no banco de dados MySQL');
  }
});

module.exports = connection;
