const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAll);
router.get("/notif/:id", controller.getNotif);

router.get("/:id", controller.getApplicant);
router.get("/search", controller.search);
router.post("/", controller.createArtist);
// router.delete("/:id", controller.deleteOne);
// router.put("/:id", controller.search);

module.exports = router;
