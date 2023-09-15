// Imports the Express router. //
const router = require('express').Router();

// Imports the thoughts and users routes. //
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

// Puts the thought routes under the /thoughts path. //
router.use('/thoughts', thoughtRoutes);

// Puts the user routes under the /users path. //
router.use('/users', userRoutes);

// Exports the router. //
module.exports = router;
