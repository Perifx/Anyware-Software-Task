const Announcement = require("../Models/Announcement");

// 1- CREATE ANNOUNCEMENT

exports.createAnnouncement = async (req, res) => {
  const newAnnouncement = new Announcement(req.body);

  try {
    const savedAnnouncement = await newAnnouncement.save();
    res.status(200).json(savedAnnouncement);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 2- GET ALL ANNOUNCEMENTS

exports.getAllAnnouncement = async (req, res) => {
  try {
    let announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 3- GET ANNOUNCEMENT BY ID

exports.getAnnouncement = async (req, res) => {
  try {
    let announcement = await Announcement.findById(req.params.id);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 4- DELETE ANNOUNCEMENT

exports.deleteAnnouncement = async (req, res) => {
  try {
    let announcement = await Announcement.findByIdAndDelete(req.params.id);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json(error);
  }
};

// 5- UPDATE ANNOUNCEMENT

exports.updateAnnouncement = async (req, res) => {
  try {
    let announcement = await Announcement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json(error);
  }
};
