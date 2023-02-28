const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const requestRoutes = require('./requestRoutes');

router.use('/users', userRoutes);

router.use('/requests', requestRoutes);

router.use('/games', gameRoutes);

module.exports = router;
