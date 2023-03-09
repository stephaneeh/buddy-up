const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const findabuddyRoutes = require("./findabuddyRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/find-a-buddy", findabuddyRoutes);

module.exports = router;
