const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const connect = () => {
  return mongoose.connect("mongodb://localhost: 27017/bookSystem");
};
const userSchema = new mongoose.Schema(
  {
    first_name: { type: "string", require: true },
    last_name: { type: "string", require: true },
    age: { type: Number, require: true },
    email: { type: "string", require: true },
    profile_image: { type: "string", require: true },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);
const user = mongoose.model("User", userSchema);
const bookModelSchema = new mongoose.Schema(
  {
    likes: { type: Number, require: true },
    cover_image: { type: "string", require: true },
    content: { type: "string", require: true },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);
const book = mongoose.model("Book", bookModelSchema);

const publicationSchema = new mongoose.Schema(
  {
    first_name: { type: "string", require: true },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);
const publication = mongoose.model("publication", publicationSchema);
const commentSchema = new mongoose.Schema(
  {
    // first_name: { type: "string", require: true },
    // last_name: { type: "string", require: true },
    // age: { type: Number, require: true },
    // email: { type: "string", require: true },
    // profile_image: { type: "string", require: true },
    body: { type: "string", require: true },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);
const Comment = mongoose.model("Comment", commentSchema);

app.listen(3000, async () => {
  try {
    await connect();
  } catch {}
});
