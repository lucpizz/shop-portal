const db = require('../models/productModel');

// Defining methods for the postsController product
module.exports = {
  findAll: function (req, res) {
    db.find()
      .populate('isReviewed brand')
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    db.aggregate([
      {
        $lookup: {
          from: 'Review',
          localField: 'isReviewed',
          foreignField: '_id',
          as: 'reviews',
        },
      },
      { $unwind: '$reviews' },
      {
        $group: {
          _id: null,
          averageStars: {
            $avg: '$reviews.totalStars',
          },
        },
      },
    ])
      .sort({ created: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    const id = req.params.id;
    console.log(id);
    db.aggregate([
      { $match: { _id: '$id' } },
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
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findBySku: function (req, res) {
    db.findOne({ sku: req.parmas.sku })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.findOne({ name: req.parmas.name })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createProduct = new db({
      sku: req.body.sku,
      slug: req.body.slug,
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      imageKey: req.body.imageKey,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      taxable: req.body.taxable,
      isActive: req.body.isActive,
      brand: req.body.brand,
      created: req.body.created,
      updated: req.body.updated,
    });
    db.create(createProduct)
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
