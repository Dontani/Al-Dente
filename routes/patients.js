const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const patientsController = require("../controllers/patients");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, patientsController.getPatients);

router.post("/createPatients", upload.single("file"), patientsController.createPatients);

router.put("/likePatients/:id", patientsController.likePatients);

router.delete("/deletePatients/:id", patientsController.deletePatients);

module.exports = router;
