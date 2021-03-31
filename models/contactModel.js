//ContactModel Schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  email: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  message: {
    type: String,
  }
});

const User = mongoose.model("Contact", ContactSchema);

module.exports = Contact;