const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json



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
    // console.log(req.body)
    // // loop through the string that is the request
    // function advanceStringByThree(str) {
    //     let result = '';
        
    //     for (let i = 0; i < str.length; i++) {
    //       let char = str[i];
          
    //       if (char.match(/[a-z]/i)) {
    //         let code = str.charCodeAt(i);
    //         let advancedCode = code + 3;
            
    //         if (char === char.toUpperCase()) {
    //           // Uppercase letters
    //           char = String.fromCharCode(((advancedCode - 65) % 26) + 65);
    //         } else {
    //           // Lowercase letters
    //           char = String.fromCharCode(((advancedCode - 97) % 26) + 97);
    //         }
    //       }
          
    //       result += char;
    //     }
        
    //     return result;
    //   }
      
    //   // Example usage
    //   const inputString = 'Hello, World!';
    //   const advancedString = advanceStringByThree(inputString);
    //   otherString  = advanceStringByThree(req.body.sentence)
    //   console.log(advancedString);
    const { sentence } = req.body;
    advancedString = sentence + " is the ciphered sentence"
      res.json({"sentence": advancedString});


})


app.post('/api/submit', (req, res) => {
    // console.log(req.body)
    // // loop through the string that is the request
    // function advanceStringByThree(str) {
    //     let result = '';
        
    //     for (let i = 0; i < str.length; i++) {
    //       let char = str[i];
          
    //       if (char.match(/[a-z]/i)) {
    //         let code = str.charCodeAt(i);
    //         let advancedCode = code + 3;
            
    //         if (char === char.toUpperCase()) {
    //           // Uppercase letters
    //           char = String.fromCharCode(((advancedCode - 65) % 26) + 65);
    //         } else {
    //           // Lowercase letters
    //           char = String.fromCharCode(((advancedCode - 97) % 26) + 97);
    //         }
    //       }
          
    //       result += char;
    //     }
        
    //     return result;
    //   }
      
    //   // Example usage
    //   const inputString = 'Hello, World!';
    //   const advancedString = advanceStringByThree(inputString);
    //   otherString  = advanceStringByThree(req.body.sentence)
    //   console.log(advancedString);
    const { sentence } = req.body; // Access the 'sentence' property directly

  // Process the sentence data as needed
  const advancedString = sentence + ' is the ciphered sentence';

  // Send the response back to the front-end
  res.json({ sentence: advancedString });


})

// app.get("/caesar", a_middleware_function);

app.listen(5000, () => console.log('Server started on port 5000'));