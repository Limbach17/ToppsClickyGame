const router = require("express").Router();
const toppsRoutes = require("./topps");

// Book routes
router.use("/topps", toppsRoutes);

module.exports = router;
