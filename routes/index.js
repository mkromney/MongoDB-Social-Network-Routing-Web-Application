// Importsthe Express router. //
const router = require('express').Router();

// Imports API routes. //
const apiRoutes = require('./api');

// Puts the API routes under the /api path. //
router.use('/api', apiRoutes);

// Middleware that handles wrong routes. //
router.use((req, res) => res.send('Wrong route!'));

// Exports the router. //
module.exports = router;
