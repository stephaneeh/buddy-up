const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Request, Console, Game, User } = require("../models");

// DESCRIPTION: Route to get to find a buddy - only accessible when logged in
router.get("/", withAuth, async (req, res) => {
  try {
    console.log("hello - in first get findabuddyRoutes.js"); //used for debugging

    const dbRequests = await Request.findAll({
      include: [
        {
          model: User,
          // attributes: ["name"],
        },
        {
          model: Game,
          // attributes: ["name"],
        },
        {
          model: Console,
          // attributes: ["name"],
        },
      ],
    });
    const requests = dbRequests.map((request) => request.get({ plain: true }));

    const dbGames = await Game.findAll();
    const games = dbGames.map((game) => game.get({ plain: true }));

    const dbConsole = await Console.findAll();
    const consoles = dbConsole.map((console) => console.get({ plain: true }));

    // const user = userData.get({ plain: true });

    res.render("findabuddy", {
      requests,
      games,
      consoles,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// WORKING! returning data correctly.
// DESCRIPTION: Creating a new find a buddy request
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("hello - in second get findabuddyRoutes.js");
    const newBuddyReq = await Request.findAll({
      where: {
        game_id: req.body.game,
        console_id: req.body.consoledb,
      },
      include: [
        {
          model: Game,
        },
        {
          model: User,
        },
      ],
    });

    console.log(newBuddyReq);

    res.status(200).json(newBuddyReq);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
