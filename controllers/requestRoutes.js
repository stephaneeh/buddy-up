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
