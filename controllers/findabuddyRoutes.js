const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Request, Console, Game } = require("../models");

// router.get("/", async (req, res) => {
//   try {
//     const findReq = await Request.findAll();
//     const findReqArray = findReq.map((el) => {
//       if (el.game == req.params.game) {
//         return el;
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     request.status(500);
//   }
// });

// DESCRIPTION: Route to get to find a buddy - only accessible when logged in
router.get("/", withAuth, async (req, res) => {
  try {
    // Find all console and game data
    const dbGames = await Game.findAll();
    // console.log(dbGames);
    const games = dbGames.map((game) => game.get({ plain: true }));

    const dbConsole = await Console.findAll();
    // console.log(dbConsole);
    const consoles = dbConsole.map((console) => console.get({ plain: true }));

    // const user = userData.get({ plain: true });

    res.render("findabuddy", {
      games,
      consoles,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
