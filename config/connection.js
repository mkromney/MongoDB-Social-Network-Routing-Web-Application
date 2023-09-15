// Imports necessary functions from the 'mongoose' package. //
const { connect, connection } = require('mongoose');

// Defines the MongoDB connection string, using the provided environment variable or a default local URL. //
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';

// Connects to the MongoDB database using the connectionString. //
connect(connectionString);

// Exports the MongoDB connection for reuse in other parts of the application. //
module.exports = connection;

