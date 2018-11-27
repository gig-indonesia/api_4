const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/account/:id", controller.findAccount);
router.get("/notif/:id", controller.showNotif);
router.get("/:id", controller.showHost);
router.post("/", controller.createHost);
router.put("/:id", controller.updateHost);

module.exports = router;
