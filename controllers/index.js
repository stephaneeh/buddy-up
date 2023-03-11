const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const findabuddyRoutes = require("./findabuddyRoutes");
const gameRoutes = require("./gameRoutes");
const myRequests = require("./requestRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/find-a-buddy", findabuddyRoutes);
router.use("/game", gameRoutes);
router.use("/request", myRequests);


module.exports = router;
