const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
 {
   thoughtText: {
     type: String,
     required: true,
     length: [ 1, 280], // length must be between 1 and 280
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
   username: {
    type: String,
    required: true,
  },
 
   reactions: [reactionSchema],

 },
 {
   toJSON: {
     getters: true,
   },
 }
);

const Thought = model('thought', thoughtSchema);

//Schema settings: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thought;