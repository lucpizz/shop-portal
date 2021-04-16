const db = require('../models/categoryModel');

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
  create: function (req, res) {
    let createCategory = new db({
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      description: req.body.description,
      isActive: req.body.isActive,
      product: req.body.product,
      created: req.body.created,
      updated: req.body.updated,
    });
    db.create(createCategory)
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
