require('dotenv').config();

module.exports = {
    development: {
      username: "root",
      password: null,
      database: "massive",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "massive_test",
      host: "127.0.0.1",
      port: 3306,
      dialect: "mysql"
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "mysql"
    }
  };
  