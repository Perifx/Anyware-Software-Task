const express = require("express");
const AnnouncementController = require("../Controllers/Announcement");

const router = express.Router();

router.route("/new").post(AnnouncementController.createAnnouncement);
router.route("/").get(AnnouncementController.getAllAnnouncement);
router.route("/:id").get(AnnouncementController.getAnnouncement);
router.route("/:id").delete(AnnouncementController.deleteAnnouncement);
router.route("/:id").put(AnnouncementController.updateAnnouncement);

module.exports = router;
