
const createJob = (req, res) => {
  res.send("create job");
};

const deleteJob = (req, res) => {
  res.send("delete job");
};

const getAllJobs = (req, res) => {
  res.send("get all jobs");
};

const updateJob = (req, res) => {
  res.send("update  job");
};

const getJob = (req, res) => {
  res.send("get a single job");
};




module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
};