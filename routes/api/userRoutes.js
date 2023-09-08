// /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user: 
// {
//  "username": "lernantino",
//  "email": "lernantino@gmail.com"
// }
// 

// PUT to update a user by its __dirname

// DELETE to remove user by its _id

// BONUS BONUS: Remove a user's associated thoughts when deleted. CASCADING?


const router = require('express').Router();
const {
  getUsers,
  getSingleUsers,
  createUsers,
  deleteUsers,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUsers);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;