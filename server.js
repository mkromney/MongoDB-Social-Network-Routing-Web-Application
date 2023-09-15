// Impors the Express module. //
const express = require('express');

// Imports the DB database connection. //
const db = require('./config/connection');

// Imports the routes for the application. //
const routes = require('./routes');

// Gets the current working directory if there is one. //
const cwd = process.cwd();

// Defines the port. //
const PORT = process.env.PORT || 3001;

// Create an Express application. //
const app = express();

// The middleware used to parse incoming request data. //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mounts the defined routes. //
app.use(routes);

// Sets up the database connection and starts the server listing the port. //
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}!`);
  });
});
