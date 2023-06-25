const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Subscription Schema.
const subscriptionSchema = new Schema({
  startDate: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
