//Schema Notes: This is not a model, but rather will be used as the reaction field's subdocument schema in the Thought Model.
const { Schema, Types } = require("mongoose");

// Defines the schema for the associated Reaction subdocument. //
const reactionSchema = new Schema(
 {
  
  reactionId: {
   type: Schema.Types.ObjectId,
   // Generates a new ObjectId if there is none. //
   default: () => new Types.ObjectId(), 
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
  // The timestamp for when the reaction was created. //
  createdAt: {
   type: Date,
   default: Date.now(),
  },
  thought: {
   type: Schema.Types.ObjectId,
   ref: 'Thought', // Reference to the parent Thought
 },
 },
 {
  // Configures the JSON serialization to include getters. //
  toJSON: {
   getters: true,
  },
 }
);

// Exports the reaction schema for use as a subdocument. //
module.exports = reactionSchema;