const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require('./../helpers')

router.get("/", controller.getAll);
router.get("/notif",helpers.isAuthenticated, controller.getNotif);
router.get("/applicants", helpers.isAuthenticated, controller.getApplicant);
router.get("/search", controller.search);
router.post("/", helpers.isAuthenticated, controller.createArtist);
// router.delete("/:id", controller.deleteOne);
// router.put("/:id", controller.search);

module.exports = router;
