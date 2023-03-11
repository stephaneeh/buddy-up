const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Request } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    // Find all requests
    const dbRequests = await Request.findAll();
    // console.log(dbRequests);
    const requests = dbRequests.map((request) => request.get({ plain: true }));

    res.render("requests", {
      requests,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

// router.post("/", async (req, res) => {
//   try {
//     const newReq = await Request.create({
//       username: req.session.username,
//       email: req.session.email,
//       game: req.params.game,
//       date: req.params.date,
//       // console: req.params.console,
//     });

//     res.json("Your Buddy Request has been created");
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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

// module.exports = router;
