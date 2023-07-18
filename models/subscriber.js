const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// Handles the subscriber schema.
const subscriberSchema = new Schema({
    subscriberKey: {
        type: Number,
        required: true
    },
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
    // magazine: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Magazine'
    //     }
    // ]
});

module.exports = mongoose.model('Subscriber', subscriberSchema);