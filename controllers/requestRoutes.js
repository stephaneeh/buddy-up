const router = require("express").Router();
const { Request } = require("../models");


router.get("/", async (req, res) => {
  console.log("anything");
  try {
    const buddyReqs = await Request.findAll();
    const buddyReqsArray = buddyReqs.map((el) => {
      if (el.game == req.params.game) {
        return el;
      }
    });
    console.log(buddyReqsArray);
    res.render("myrequests", {buddyReqsArray})
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

router.delete("/:id", async (req, res) => {
  try {
    const delReq = await Request.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json("Your Buddy Request has been deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
