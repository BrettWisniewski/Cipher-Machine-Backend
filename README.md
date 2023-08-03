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

bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


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

Running the Server
In the backend folder, install the dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
GET /data/allResults: Retrieve all results with a specific name.

GET /data/results: Retrieve results with names starting with a specific letter.

POST /data/reset: Reset the data by inserting new records into the database.

GET /api: Get a list of users.

GET /caesar: Get a caesar ciphered sentence.

POST /caesar: Post a sentence to get a caesar ciphered result.

POST /api/submit: Submit a sentence to get a ciphered result.

POST /api/submitcaesar: Submit a sentence to get a caesar ciphered result.

POST /api/submitconcealment: Submit a sentence to get a concealed result.

POST /api/submittransposition: Submit a sentence to get a transposition ciphered result.

Copy code
License
This project is licensed under the MIT License.



