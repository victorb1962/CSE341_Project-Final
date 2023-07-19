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

const updateCategory = async (req, res) => {
  try {
    const categoryId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const category = {
      category: req.body.category
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('category')
      .updateOne({ _id: categoryId }, category);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the category.');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCategory,
  updateCategory
};
