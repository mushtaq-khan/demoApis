const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {https://www.thunderclient.com/welcome
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.send(product);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router

