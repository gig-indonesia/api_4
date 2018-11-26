const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/:id", controller.getApplicant);
router.get("/", controller.getAll);
router.post("/", controller.create);
router.delete("/:id", controller.deleteOne);
router.put("/:id", controller.update);

module.exports = router;
