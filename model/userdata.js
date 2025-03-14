const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["Staff", "Customer","Admin"], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
