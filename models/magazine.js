const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Magazine Schema, references the category model.
const magazineSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Subscriber',
    required: true,
  },
});

module.exports = mongoose.model('Magazine', magazineSchema);
