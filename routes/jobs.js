const express = require("express");
const { createJob, updateJob, deleteJob, getAllJobs, getJob } = require("../controllers/jobs");
const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);;
router.route("/:id").delete(deleteJob).patch(updateJob).get(getJob);

module.exports = router;
