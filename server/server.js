const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json


// // all of this is new database stuff
const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cipherdata',
  password: 'thedata2011',
  port: 5432, // Default PostgreSQL port is 5432
});

// Create a new table
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS cipher_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rules TEXT,
    hints TEXT[],
    answer JSONB
  )
`;

pool.query(createTableQuery, (err, result) => {
  if (err) {
    console.error('Unable to create table:', err);
  } else {
    console.log('Table created successfully');
  }
});



app.get('/data/allResults', (req, res) => {
  const { name } = req.query;

  const getAllResultsQuery = `
    SELECT * FROM cipher_table
    WHERE name = $1
  `;

  pool.query(getAllResultsQuery, [name], (err, result) => {
    if (err) {
      console.error('Error fetching all results:', err);
      res.sendStatus(500);
    } else {
      const results = result.rows;
      res.json(results);
    }
  });
});












app.get('/data/results', (req, res) => {
  const { letter } = req.query;

  const searchQuery = `
    SELECT * FROM cipher_table
    WHERE name LIKE '${letter}%'
    LIMIT 3
  `;

  pool.query(searchQuery, (err, result) => {
    if (err) {
      console.error('Error fetching results:', err);
      res.sendStatus(500);
    } else {
      
      const results = result.rows;
      res.json(results);
    }
  });
});










// end of my view application

app.post('/data/reset', (req, res) => {
  // const { insideData, nameSentence, theCipherRule, responses } = req.body;
  console.log(req.body);
  const { insideData, nameSetence, theCipherRule, responses } = req.body;
  console.log(insideData, nameSetence, theCipherRule, responses);

  // ... existing code

  const values = [nameSetence || '', theCipherRule, responses, insideData];

  const insertDataQuery = `
    INSERT INTO cipher_table (name, rules, hints, answer)
    VALUES ($1, $2, $3, $4)
  `;

  

  pool.query(insertDataQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.sendStatus(500);
    } else {
      console.log('Data inserted successfully');
      res.sendStatus(200);
    }
  });
});





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


   
    res.json({"sentence": sentenceChange});

   // res(multiple)
    });

app.post('/caesar', (req, res) => {
   
    const { sentence } = req.body;
    advancedString = sentence + " is the ciphered sentence"
      res.json({"sentence": advancedString});


})


app.post('/api/submit', (req, res) => {
    
// added a comment
    const { sentence } = req.body; // Access the 'sentence' property directly

  // Process the sentence data as needed
  const advancedString = sentence + ' is the ciphered sentence';

  // Send the response back to the front-end
  res.json({ sentence: advancedString });


})
app.post('/api/submitcaesar', (req, res) => {
  const { sentence } = req.body; // Access the 'sentence' property directly
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    let charCode = sentence.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters (A-Z)
      charCode = ((charCode - 65 + 3) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters (a-z)
      charCode = ((charCode - 97 + 3) % 26) + 97;
    }

    result += String.fromCharCode(charCode);
  }

  res.json({ sentence: result });

  
  })

  app.post('/api/submitconcealment', (req, res) => {
    try{
    const { sentence } = req.body; // Access the 'sentence' property directly
    

    const letters = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];

function randomWordGenerator(word) {
  let counter = 0;
  let returnedString = "";

  while (counter <= 3) { 
  if(counter === 2){returnedString += word}
else{
    const randomIndex = Math.floor(Math.random() * letters.length);
    returnedString += letters[randomIndex];
}
    counter++; // Increment the counter
  }
  returnedString += ','

  return returnedString;
}

function returnedThing(something) {
  let blankstring = "";

  for (let i = 0; i < something.length; i++) {
    blankstring += randomWordGenerator(something[i]);
    blankstring += " "
  }

  return blankstring; // Return blankstring, not result
}

    const indexedString = returnedThing(sentence);
    res.json({ sentence: indexedString });
}

    catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
    
    })

  

app.post('/api/submittransposition', (req, res) => {
try{
  const { sentence } = req.body;
  function routeCipher(theWord){
    // remove whitespace in theWord 
    let message = theWord.replace(/\s/g, '');

    firstString = ""
    secondString = ""
    thirdString = ""
    
    counter = 0
    
    for (let i = 0; i < message.length; i++) {
        if(counter === 0){
  firstString += message[i];
  counter += 1;
        }
        else if(counter === 1){
            secondString += message[i];
            counter += 1;
        }
        else{
            thirdString += message[i]
            counter = 0;
        }
        
        
}
someString = firstString + "\n" + secondString +"\n" + thirdString
return someString;
    
    
}
const result = routeCipher(sentence);
res.json({ sentence: result });
}

catch (error) {
  console.error('Error occurred:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}


})

app.listen(5000, () => console.log('Server started on port 5000'));


