const mysql = require('mysql');

// Create a connection to the database
const con = mysql.createConnection({
  host: 'localhost',   // Fixed the space here
  user: 'root',
  password: 'Brighton123',        // Make sure to set the correct password if needed
  database: 'mydb'     // Ensure this is the name of your actual database
});

// Connect to the database
con.connect(function(err) {
  if (err) throw err;  // If there's an error, throw it
  console.log('Connected!');  // Successfully connected
});