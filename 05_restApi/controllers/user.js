const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  return res.status(200).json(allUsers);
}

async function handleCreateUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.Job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.Job_title,
  });

  return res.status(201).json({ msg: "Success" });
}

async function handleGetUserById(req, res) {
  const users = await User.findById(req.params.id);
  return res.json(users);
}
async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" });
  return res.json({ status: "Success" });
}
async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

module.exports = {
  handleGetAllUsers,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById

};
