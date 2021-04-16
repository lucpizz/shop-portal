const db = require('../models/merchantModel');

// Defining methods for the postsController merchant
module.exports = {
  findAll: function (req, res) {
    db.find()
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    let findId = new db({
      id: req.parmas.id,
    });
    db.findById(findId)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    let findEmail = new db({
      email: req.parmas.email,
    });
    db.findOne(findEmail)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByPhoneNumber: function (req, res) {
    let findPhoneNumber = new db({
      phoneNumber: req.parmas.phoneNumber,
    });
    db.findOne(findPhoneNumber)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createMerchant = new db({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      description: req.body.description,
      status: req.body.status,
      isActive: req.body.isActive,
      created: req.body.created,
      updated: req.body.updated,
    });

    db.create(createMerchant)
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
