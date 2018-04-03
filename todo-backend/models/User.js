const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  emailId: {
    type: String,
    unique: true
  },
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

mongoose.model("User", userSchema);
