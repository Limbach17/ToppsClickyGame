const router = require("express").Router();
const booksController = require("../../controllers/toppsController");

router.route("/")
  .get(booksController.findAll)
  
router
  .route("/:id")
  .get(toppsController.findById)
  .put(toppsController.update)
 
module.exports = router;
