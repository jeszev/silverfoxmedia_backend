var mysql = require('mysql');
require('dotenv').config();

connection = mysql.createPoolCluster();
connection.add("MASTER", {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

module.exports ={
    db: connection.of('MASTER'),
};