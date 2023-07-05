const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json


// all of this is new database stuff
const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cipherdata',
  password: 'thedata2011',
  port: 5432, // Default PostgreSQL port is 5432
});

// Add mock data to a table
const mockData = {
    name: 'John Doe',
    cipher: "RPTHPG",
    rules: 'Mock data',
  };
  

// Create a table
pool.query(
    `CREATE TABLE IF NOT EXISTS your_table (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      cipher VARCHAR(255),
      cipher_rules VARCHAR(255)
    )`,
    (error, results) => {
      if (error) {
        console.error('Error creating table:', error);
      } else {
        console.log('Table created or already exists!');
      }
    }
  );
  
  // Check if the table exists
  pool.query(
    `SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'your_table'
    )`,
    (error, results) => {
      if (error) {
        console.error('Error checking table existence:', error);
      } else {
        const tableExists = results.rows[0].exists;
        if (tableExists) {
          console.log('Table exists!');
        } else {
          console.log('Table does not exist!');
        }
      }
    }
  );
//   pool.query(
//     'INSERT INTO your_table (name, age, email) VALUES ($1, $2, $3)',
//     [mockData.name, mockData.age, mockData.email],
//     (error, results) => {
//       if (error) {
//         console.error('Error inserting mock data:', error);
//       } else {
//         console.log('Mock data inserted successfully!');
//       }
//     }
//   );

// end of database stuff


+
app.get('/api', (req, res) => {

    res.json({"users": ["user1", "user2", "user3", "user4"]});
});
// make an app post request
// have post request decipher the caesar cipher
// return deciphered sentence


const a_middleware_function = function (req, res, next) {

    // Perform some operations
    next(); // Call next() so Express will call the next middleware function in the chain.
  };

app.get('/caesar', (req, res) => {
    console.log(req.body)
    sentenceChange = "RPTHPG"

    // send back the multiple
    res.json({"sentence": sentenceChange});

   // res(multiple)
    });

app.post('/caesar', (req, res) => {
   
    const { sentence } = req.body;
    advancedString = sentence + " is the ciphered sentence"
      res.json({"sentence": advancedString});


})


app.post('/api/submit', (req, res) => {
    
    const { sentence } = req.body; // Access the 'sentence' property directly

  // Process the sentence data as needed
  const advancedString = sentence + ' is the ciphered sentence';

  // Send the response back to the front-end
  res.json({ sentence: advancedString });


})

// app.get("/caesar", a_middleware_function);

app.listen(5000, () => console.log('Server started on port 5000'));