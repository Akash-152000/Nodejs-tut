const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/node-tut")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error occured", err));

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true,
  },
  job_title: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

app.get("/users", async (req, res) => {
  const allUsers = await User.find({});
  const html = `
        <ul>
            ${allUsers
              .map((user) => {
                return `<li>
                        ${user.first_name} - ${user.email}
                    </li>`;
              })
              .join("")}
        </ul>

    `;

  res.status(200).send(html);
});

app.get("/api/users",async (req, res) => {
    const allUsers = await User.find({})
    return res.status(200).json(allUsers)
});


app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const users = await User.findById(req.params.id)
      return res.json(users);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id,{last_name:"Changed"})
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" });
  });

app.post("/api/users", async (req, res) => {
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
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
