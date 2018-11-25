const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/:id", controller.search);
router.get("/", controller.getAll);
router.get("/:id", controller.getCreated);
router.post("/", controller.creategig);
router.delete("/:id", controller.deleteOne);
router.put("/:id", controller.update);

module.exports = router;
