const { Schema, model } = require('mongoose');
const userSchema = require('./User');


// Schema to create Student model
const friendSchema = new Schema(
 {
  friends: [
   {
     type: Schema.Types.ObjectId,
     ref: 'User',
   },
 ],
},
 {
   toJSON: {
     getters: true,
   },
 }
);

const Friend = model('friend', friendSchema);

//Schema settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

module.exports = Friend;