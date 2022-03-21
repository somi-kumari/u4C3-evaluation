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
app.post("/users",
body("first_name")

// ...............

// body('username').isEmail(),
body("firstName")
  .trim()
  .not()
  .isEmpty()
  .bail()
  .withMessage("First Name cannot be empty")
  .isLength({ min: 3 })
  .withMessage("First Name must be at least 3 characters"),
body("email")
  .isEmail()
  .custom(async (value) => {
    const user = await User.findOne({ email: value });

    if (user) {
      throw new Error("Email is already taken");
    }
    return true;
  }),
body("age")
  .not()
  .isEmpty()
  .withMessage("Age cannot be empty")
  .isNumeric()
  .withMessage("Age must be a number between 1 and 120")
  .custom((val) => {
    if (val < 1 || val > 150) {
      throw new Error("Incorrect age provided");
    }
    return true;
  }),

 




body("lastName").custom((value) => {
  if (value && value.length < 3) {
    throw new Error("Last Name if provided must be at least 3 characters");
  }
  return true;
}),
async (req, res) => {
  try {
    console.log(body("firstName"));
    const errors = validationResult(req);
    console.log({ errors });
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
);
// ......
"/",
// body('username').isEmail(),
body("likes")
  .trim()
  .not()
  .isEmpty()
  .bail()
  .withMessage("First Name cannot be empty")
  .isLength({ min: 3 })
  .withMessage("First Name must be at least 3 characters"),
body("email")
  .isEmail()
  .custom(async (value) => {
    const user = await User.findOne({ email: value });

    if (user) {
      throw new Error("Email is already taken");
    }
    return true;
  }),


 





async (req, res) => {
  try {
    console.log(body("firstName"));
    const errors = validationResult(req);
    console.log({ errors });
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
;
// ......
"/",
// body('username').isEmail(),
body("publication")
  .trim()
  .not()
  .isEmpty()
  .bail()
  .withMessage("")
  .isLength({ min: 3 })
  .withMessage("First Name must be at least 3 characters"),
body("email")
  .isEmail()
  .custom(async (value) => {
    const user = await User.findOne({ email: value });

    if (user) {
      throw new Error("Email is already taken");
    }
    return true;
  }),


 




body("name").custom((value) => {
  if (value && value.length < 3) {
    throw new Error("Last Name if provided must be at least 3 characters");
  }
  return true;
}),
async (req, res) => {
  try {
    console.log(body("firstName"));
    const errors = validationResult(req);
    console.log({ errors });
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}
;





app.listen(3000, async (req,res) => {
  console.log("listening on port 3000")
});
