const { Schema, model } = require("mongoose");
// const userSchema = require('./User');
const reactionSchema = require("./Reaction");

// Schema to create Student model
const thoughtSchema = new Schema(
 {
  thoughtText: {
   type: String,
   required: true,
   length: [1, 280], // length must be between 1 and 280
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  reactions: [reactionSchema],
 },
 {
  toJSON: {
   getters: true,
  }, 
 }
);

const Thought = model("thought", thoughtSchema);

//Schema settings: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thought;
