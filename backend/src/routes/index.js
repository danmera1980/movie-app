/** @format */

const { Router } = require('express');
const userRoute = require('./routerUser');
const movieRoute = require('./routerMovie');
const commentRoute = require('./routerComment');
const favoriteRoute = require('./routerFavorite');
const jwAuth = require('./jwAuth');
const dashboard = require('./dashboard')

const router = Router();

router.use('/auth', jwAuth);
router.use('/dashboard', dashboard);
router.use('/users', userRoute);
router.use('/comments', commentRoute);
router.use('/movies', movieRoute);
router.use('/favorites', favoriteRoute);

module.exports = router;