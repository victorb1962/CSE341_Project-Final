const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Subscription Schema.
const subscriptionSchema = new Schema({
  qty: {
    type: Number,
    required: true,
  },
  measurement: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
