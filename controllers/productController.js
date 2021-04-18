const db = require('../models/productModel');

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.aggregate([
      {
        $lookup: {
          from: 'reviews',
          localField: 'isReviewed',
          foreignField: '_id',
          as: 'reviews',
        },
      },
      {
        $unwind: {
          path: '$reviews',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: '$_id',
          averageStars: {
            $avg: '$reviews.totalStars',
          },
          sku: { $first: '$sku' },
          slug: { $first: '$slug' },
          name: { $first: '$name' },
          imageUrl: { $first: '$imageUrl' },
          imageKey: { $first: '$imageKey' },
          description: { $first: '$description' },
          price: { $first: '$price' },
          brand: { $first: '$brand' },
          isActive: { $first: '$isActive' },
          reviews: {
            $push: {
              name: '$reviews.name',
              title: '$reviews.title',
              totalStars: '$reviews.totalStars',
              description: '$reviews.description',
              isActive: '$reviews.isActive',
              created: '$reviews.created',

            },
          },
        },
      },
    ])
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findBySku: function (req, res) {
    let findSku = new db({
      sku: req.params.sku,
    });
    db.findOne(findSku)
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
    db.create(req.body)
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
  findIsFeatured: function (req, res) {
    db.find({ isFeatured: 'true' })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
