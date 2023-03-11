const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Request, Console, Game, User } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    // Find all requests
    const dbRequests = await Request.findAll();
    const requests = dbRequests.map((request) => request.get({ plain: true }));

    const dbGames = await Game.findAll();
    const games = dbGames.map((game) => game.get({ plain: true }));

    const dbConsole = await Console.findAll();
    const consoles = dbConsole.map((console) => console.get({ plain: true }));

    res.render("requests", {
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

router.post("/", async (req, res) => {
  try {
    const newReq = await Request.create({
      username: req.session.username,
      email: req.session.email,
      game: req.params.game,
      date: req.params.date,
      // console: req.params.console,
    });

    res.json("Your Buddy Request has been created");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     const delReq = await Request.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     res.json("Your Buddy Request has been deleted");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
