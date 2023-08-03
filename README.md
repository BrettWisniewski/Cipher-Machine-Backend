# RealFullStack

GO TO THE FULL-STACK-CIPHER-FRONT FIRST AS THAT HAS THE ENTIRE PROJECT DESCRIPTION ALONG WITH CREDITS AND DIRECTIONS.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Database Setup](#database-setup)
  - [Running the Server](#running-the-server)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js (https://nodejs.org)
- PostgreSQL database (https://www.postgresql.org)

### Cloning the Repository

 Clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```


### Database Setup
To set up the database for the project, follow these steps:

Make sure you have PostgreSQL installed on your machine. If you don't have it, download and install it from the official website: https://www.postgresql.org.

Once PostgreSQL is installed, open the backend folder (where the server code is located) in your preferred code editor, like Visual Studio Code.

In the backend folder, you'll find a file named .env. Open it and add your database credentials:

makefile
Copy code
DB_USER=your_database_user
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=your_database_port


Replace your_database_user, your_database_host, your_database_name, your_database_password, and your_database_port with your actual PostgreSQL database credentials.

``` JavaScript// Existing code...

const { Pool } = require('pg');

const pool = new Pool({
  user: 'name', // your userName
  host: 'host', // your host
  database: 'database', // your database name
  password: 'password', // your password
  port: 5432, // Default PostgreSQL port is 5432
});

// More existing code...
```
Replace the connection information with the variables from your .env file:

``` JavaScript// Existing code...

// Existing code...

const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// More existing code....
```

Now, let's create a new table in the database. The code to create the table is already provided in the app.js file:

``` JavaScript// Existing code...
// Existing code...

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

// More existing code...
```

This code will create a table named cipher_table if it doesn't already exist. The table will have columns id, name, rules, hints, and answer. Feel free to customize the table structure to fit your specific needs.

### Running the Server
To run the backend server, follow these steps:

Make sure you have Node.js installed on your machine. If you don't have it, download and install it from the official website: https://nodejs.org.

Open your terminal or command prompt and navigate to the backend folder.

Install the required dependencies by running the following command:

```bash

npm install
```

After the dependencies are installed, you can start the server by running the following command:
```bash

npm start
```
The server will start listening on port 5000, and you should see the message "Server started on port 5000" in the terminal.

Congratulations! Your backend server is now set up and running. You can start making API requests to interact with the database and perform various operations.

### API Endpoints
## API Endpoints

### Get All Results

- **URL:** `/data/allResults`
- **Method:** `GET`
- **Query Parameters:** `name` (required)
- **Description:** Get all results from the `cipher_table` based on the provided `name`.

### Get Results by Letter

- **URL:** `/data/results`
- **Method:** `GET`
- **Query Parameters:** `letter` (required)
- **Description:** Get the first 3 results from the `cipher_table` where the `name` starts with the provided letter.

### Reset Data

- **URL:** `/data/reset`
- **Method:** `POST`
- **Request Body:** `insideData`, `nameSetence`, `theCipherRule`, `responses` (required)
- **Description:** Insert new data into the `cipher_table`.

### Caesar Endpoint

- **URL:** `/caesar`
- **Method:** `GET`
- **Description:** Get the response with `"sentence": "RPTHPG"`.

- **Method:** `POST`
- **Request Body:** `sentence` (required)
- **Description:** Return the response with the provided `sentence` along with `" is the ciphered sentence"` appended.

### Other Endpoints

Here are some other API endpoints:

- **URL:** `/api`
- **Method:** `GET`
- **Description:** Return a response with an array of users.

- **URL:** `/api/submit`
- **Method:** `POST`
- **Request Body:** `sentence` (required)
- **Description:** Process the `sentence` data and return the response with `"sentence": " is the ciphered sentence"`.

- **URL:** `/api/submitcaesar`
- **Method:** `POST`
- **Request Body:** `sentence` (required)
- **Description:** Process the `sentence` data using the Caesar cipher algorithm and return the response with the ciphered sentence.

- **URL:** `/api/submitconcealment`
- **Method:** `POST`
- **Request Body:** `sentence` (required)
- **Description:** Process the `sentence` data and return a response with three random letters appended to each character.

- **URL:** `/api/submittransposition`
- **Method:** `POST`
- **Request Body:** `sentence` (required)
- **Description:** Process the `sentence` data using the route cipher algorithm and return the response with the transposed sentence.

### License
This project is licensed under the MIT License.



