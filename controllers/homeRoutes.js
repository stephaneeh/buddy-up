const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Game } = require("../models");


// the withauth middleware checks whether the use is logged in before proceeding
router.get("/", withAuth, async (req, res) => {
  try {
    const dbGames = await Game.findAll();
    // console.log(dbGames);
    const games = dbGames.map((game) => game.get({ plain: true }));

    res.render("homepage", {
      games,
      // passing through the users and logged in status to the homepage.handlebars
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if the user is logged in then redirect to the homepage, if not, render the login.handlebars
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
