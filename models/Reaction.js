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
    // Date
    // Set default value to the current timestamp
    // Use a getter method to format the timestamp on query
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