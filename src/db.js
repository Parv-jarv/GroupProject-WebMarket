import mysql from 'mysql2'

const mydb = 'mydb';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Brighton123',
    database: mydb

}) .promise();

const result = await pool.query("SELECT * FROM users")
console.log(result);