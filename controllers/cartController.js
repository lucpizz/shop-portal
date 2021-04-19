const db = require('../models/cartModel');

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.find()
      .populate('user products.product')
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
  // findByIdandProduct: function (req, res) {
  //   db.find({ _id: req.params.id, 'products._id': req.params.product })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findByProduct: function (req, res) {
  //   let findProduct = new db({
  //     'products._id': req.params.product,
  //   });
  //   db.findOne(findProduct)
  //     .populate('products.product products.product.brand')
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // findByStatus: function (req, res) {
  //   let findStatus = new db({
  //     status: req.params.status,
  //   });
  //   db.findOne(findStatus)
  //     .populate('products.product products.product.brand')
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  findByUserandStatus: function (req, res) {
    let findUserStatus = new db({
      user: req.params.user,
      status: req.params.status,
    });
    db.find(findUserStatus)
      .populate('products.product products.product.brand')
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    let createCart = new db({
      product: req.params.product,
      quantity: req.params.quantity,
      totalPrice: req.params.totalPrice,
      priceWithTax: req.params.priceWithTax,
      status: req.params.status,
    });
    db.create(createCart)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    let updateCart = new db({ _id: req.params.id }, req.body);
    db.findOneAndUpdate(updateCart)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // updateAProduct: function (req, res) {
  //   let updateProduct = new db(
  //     { _id: req.params.id, 'products._id': req.params.product },
  //     req.body
  //   );
  //   db.findOneAndUpdate(updateProduct)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  remove: function (req, res) {
    let removeProduct = new db({ _id: req.params.id });
    db.findById(removeProduct)
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // removeAProduct: function (req, res) {
  //   let removeProduct = new db({
  //     _id: req.params.id,
  //     'products._id': req.params.product,
  //   });
  //   db.findOneAndRemove(removeProduct)
  //     // .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => {
  //       console.log(res.json(dbModel)); // FOR TESTING
  //       res.json(dbModel);
  //     })
  //     .catch((err) => res.status(422).json(err));
  // },
};
