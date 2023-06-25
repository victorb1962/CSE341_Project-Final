const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Handles the subscriber schema.
const subscriberSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // magazines: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'magazine'
    //     }
    // ]
});

module.exports = mongoose.model('Subscriber', subscriberSchema);