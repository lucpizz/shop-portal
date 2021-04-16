const db = require('../models/contactModel');

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.find()
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    let findId = new db({
      id: req.params.id,
    });
    db.findById(findId)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByName: function (req, res) {
    let findName = new db({
      name: req.params.name,
    });
    db.findOne(findName)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    let findEmail = new db({
      email: req.params.email,
    });
    db.findOne(findEmail)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createContact = new db({
      name: req.params.name,
      email: req.params.email,
      message: req.params.message,
      updated: req.params.updated,
      created: req.params.created,
    });
    db.create(createContact)
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
