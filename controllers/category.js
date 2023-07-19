const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllCategory = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('category').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = {
      category_item: req.body.category_item
    };
    const response = await mongodb.getDb().db().collection('category').insertOne(category);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the category.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCategory,
  createCategory
};
