// Imports the Express router. //
const router = require('express').Router();

// Imports the controller functions from the thought controller. //
const {
  getThoughts,
  getSingleThought,
  createThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// Defines all routes for handling thoughts. //

// Route: GET/POST /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// Route: GET /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// Route: POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// Route: DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

// Exports the router. //
module.exports = router;
