const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Game } = require("../models");

// the withauth middleware checks whether the use is logged in before proceeding
router.get("/:id", withAuth, async (req, res) => {
  const gameID = req.params.id;

  try {
    const dbGames = await Game.findOne({
      where: {
        id: gameID,
      },
      attributes: ["id", "name"],
    });

    const games = dbGames.get({ plain: true });

    res.render("game", {
      games,
      // passing through the users and logged in status to the homepage.handlebars
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
