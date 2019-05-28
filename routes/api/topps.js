const router = require("express").Router();
const toppsController = require("../../controllers/toppsController");

router.route("/")
  .get(toppsController.findAll)
  
router
  .route("/:id")
  .get(toppsController.findById)
  .put(toppsController.update)
 
module.exports = router;
