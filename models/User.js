const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');


// Schema to create Student model
const userSchema = new Schema(
 {
   username: {
     type: String,
     //unique
     required: true,
     max_length: 50,
   },
   email: {
     type: String,
     required: true,
     //unique
     //must match a valid email,
   },
   
   thoughts: [thoughtSchema],
   friends: [userSchema],

 },
 {
   toJSON: {
     getters: true,
   },
 }
);

const User = model('user', userSchema);

//Schema settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

module.exports = User;