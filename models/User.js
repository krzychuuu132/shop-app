const moongose = require("mongoose");

const userSchema = moongose.Schema({
  name: {
    type: String,
    required: true,
    min: 4,
    max: 8
  },
  surname: {
    type: String,
    required: true,
    min: 4,
    max: 8
  },
  email: {
    type: String,
    required: true,
    min: 9,
    max: 20
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 256
  },
  repeatPassword: {
    type: String,
    required: true,
    min: 6,
    max: 256
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongose.model("User", userSchema);
