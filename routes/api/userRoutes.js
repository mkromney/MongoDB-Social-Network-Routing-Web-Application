const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser, 
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET/ POST to, all users:  /api/users
router.route('/').get(getUsers).post(createUser);

// GET/ DELETE a single user by Id: /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// PUT or update a user by its id.
router.route('/:userId').post(updateUser);

// POST a new friend:  /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// DELETE to remove a friend:  /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;