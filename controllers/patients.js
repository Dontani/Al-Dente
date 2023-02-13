const cloudinary = require("../middleware/cloudinary");
const Patients = require("../models/Patients");
const Comment = require("../models/Comments")
module.exports = {
  getProfile: async (req, res) => {
    try {
      const patients = await Patients.find({ user: req.user.id });
      res.render("profile.ejs", { patients: patients, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const patients = await Patients.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { patients: patients });
    } catch (err) {
      console.log(err);
    }
  },
  getPatients: async (req, res) => {
    try {
      const patients = await Patients.findById(req.params.id);
      const comments = await Comment.find({Patients: req.params.id}).sort({
        createdAt: "desc"}).lean()
      res.render("patient.ejs", { patients: patients, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createPatients: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Patients.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Patient has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePatients: async (req, res) => {
    try {
      await Patients.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/Patients/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePatients: async (req, res) => {
    try {
      // Find Patients by id
      let patients = await Patients.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(Patients.cloudinaryId);
      // Delete Patients from db
      await Patients.remove({ _id: req.params.id });
      console.log("Deleted Patient");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
