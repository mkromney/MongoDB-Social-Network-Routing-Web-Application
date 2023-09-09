//  /api/thoughts
// GET to all thoughts
// GET to a single thought by its _id.
// POST to create a new thought (don't forget to push the create thought's _id to the associated user's thoughts array field)
// PUT to update a thought by its _id
// DELETE to pull and remove a reaction by the reaction's reactionID value

const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;