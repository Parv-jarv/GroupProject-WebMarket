import mysql from 'mysql2'
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const mydb = 'mydb';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Brighton123',
    database: mydb

}) .promise();

const result = await pool.query("SELECT * FROM users")
console.log(result);

async function createUser (userID, firstname, secondname, username, email, phoneNumber){ // what rows are affceted by insert statment 
const result = await pool.query("INSERT INTO users (userID, firstname, secondname, username, email, phoneNumber) VALUES (?,?,?,?,?,?)", // sql querey to insert data into data base 
[userID, firstname, secondname, username, email, phoneNumber]);

return result; // returns 

} 

const testdata = await createUser("0002", "big", "john", "bigjohn123", "bigjohn2@outlook.com", "07452133453");
console.log(testdata);
