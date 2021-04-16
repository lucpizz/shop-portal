const db = require('../models/userModel');

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.find()
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById({ id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.findOne({ email: req.params.email })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUsername: function (req, res) {
    db.findOne({ username: req.params.username })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByLastname: function (req, res) {
    db.findOne({ lastName: req.params.lastName })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByPhoneNumber: function (req, res) {
    db.finOne({ phoneNumber: req.params.phoneNumber })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createUser = new db({
      role: req.body.role,
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
      provider: req.body.provider,
      merchant: req.body.merchant,
      phoneNumber: req.body.phoneNumber,
      googleId: req.body.googleId,
      facebookId: req.body.facebookId,
      resetPasswordToken: req.body.resetPasswordToken,
      resetPasswordExpires: req.body.resetPasswordExpires,
      created: req.body.created,
      updated: req.body.updated,
    });
    db.create(createUser)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
