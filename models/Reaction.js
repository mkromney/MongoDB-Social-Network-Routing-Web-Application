const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const { ObjectId } = require('mongodb');

// Schema to create Student model
const reactionSchema = new Schema(
 {
   reactionId: {
     type: ObjectId,
     // default value set to a new ObjectID
   },
   reactionBody: {
     type: String,
     required: true,
     max_length: 280,
   },
   username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date, // Date type for storing timestamps
    default: Date.now, // Set default value to the current timestamp when a new document is created
    get: function (timestamp) {
      // Use a getter method to format the timestamp on query
      // This function can be used to format the timestamp as needed (e.g., in a specific date format)
      return new Date(timestamp).toLocaleDateString(); // Example: Format timestamp to a readable date string
    },
  },
 },
 {
   toJSON: {
     getters: true,
   },
 }
);

const Reaction = model('reaction', reactionSchema);

//Schema Notes: This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought Model.

module.exports = Reaction;