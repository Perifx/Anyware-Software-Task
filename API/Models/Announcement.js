const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema(
  {
    instructor: { type: String, required: true },
    courseName: { type: String, required: true },
    courseCode: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Announcement", AnnouncementSchema);
