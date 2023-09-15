// Imports the router. //
const router = require('express').Router();

// Imports all controller functions from the user controller. //
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser, 
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// All routes for handling users. //

// GET/ POST to, all users:  /api/users 
router.route('/').get(getUsers).post(createUser);

// GET/ DELETE a single user by Id: /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// PUT or update a user by its id.
router.route('/:userId').put(updateUser);

// POST a new friend by user id:  /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// DELETE to remove a friend by user id:  /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

// Exports the router. //
module.exports = router;