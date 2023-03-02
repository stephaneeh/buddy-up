const router = require('express').Router();
const { Game } = require("../../models");

router.get('/', async (req, res) => {
    const dbGames = await Game.findAll();
    // console.log(dbGames);
    const games = dbGames.map((game) => (
         game.get({plain: true})
    ));

    console.log(games);
    res.render('homepage', {
        games,
        logged_in: req.session.logged_in,
    });
});

module.exports = router;