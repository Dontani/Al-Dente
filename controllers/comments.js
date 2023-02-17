const Comment = require("../models/Comments")
module.exports = {
  createComment: async (req, res) => {
    try {
      
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        patients: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/patients/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  }
  };
