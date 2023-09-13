const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
 {
   username: {
     type: String,
     unique: true,
     required: true,
     maxlength: 50, 
   },
   email: {
     type: String,
     required: true,
     unique: true, 
     match: /^\S+@\S+\.\S+$/, 
   },
   
   thoughts: [{
    type: Schema.Types.ObjectId,
    ref: "thought"
   }], 
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

const User = model('user', userSchema);

// Schema settings: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
// userSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });

module.exports = User;
