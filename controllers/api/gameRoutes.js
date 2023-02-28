const router = require('express').Router();
const { Game } = require("../../models");

router.get('/', async (req, res) => {
    const games = await Game.findAll();
    return games;
});

module.exports = router;