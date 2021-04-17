const db = require('../models/addressModel');

// Defining methods for the postsController address
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
  findByUser: function (req, res) {
    let findUser = new db({
      user: req.parmas.user,
    });
    db.findOne(findUser)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByStreetAddress: function (req, res) {
    let findStreetAddress = new db({
      streetAddress: req.parmas.streetAddress,
    });

    db.findOne(findStreetAddress)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByCity: function (req, res) {
    let findCity = new db({
      city: req.parmas.city,
    });

    db.findOne(findCity)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByState: function (req, res) {
    let findState = new db({
      state: req.parmas.state,
    });
    db.findOne(findState)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByCountry: function (req, res) {
    let findCountry = new db({
      country: req.parmas.country,
    });

    db.findOne(findCountry)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByZipcode: function (req, res) {
    let findZipcode = new db({
      zipeCode: req.parmas.zipeCode,
    });
    db.findOne(findZipcode)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createAddress = new db({
      user: req.body.user,
      streetAddress: req.body.streetAddress,
      streetAddress2: req.body.streetAddress2,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      zipCode: req.body.zipCode,
      isDefault: req.body.isDefault,
      isActive: req.body.isActive,
      updated: req.body.updated,
      created: req.body.created,
    });

    db.create(createAddress)
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
