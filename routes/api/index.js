

// THIS IS AN EXAMPLE



const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
