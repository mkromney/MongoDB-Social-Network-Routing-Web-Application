const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
 {
   username: {
     type: String,
     //unique
     required: true,
     maxlength: 50, // Changed max_length to maxlength
   },
   email: {
     type: String,
     required: true,
     unique: true, // TODO: email must be unique
     match: /^\S+@\S+\.\S+$/, // TODO: must match a valid email format
   },
   
   thoughts: [thoughtSchema],
  //  friends: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User',
  //   },
  // ],
},
 {
   toJSON: {
     getters: true,
   },
 }
);

const User = model('user', userSchema);

// Schema settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
// userSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });

module.exports = User;
