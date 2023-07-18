const Subscription = require('../models/subscription'); 
const { validationResult } = require('express-validator'); 

/**
 * Added comments for each controller export to be placed. 
 * Make sure to un-comment the route in /routes/subscription.js before testing.
 */

//GET subscription
exports.getSubscription = (req, res, next) => {
  Subscription.find()
    .then(subscription => {
      res.send(subscription); 
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//POST to add subscription
exports.postAddSubscription = (req, res, next) => {
  const startDate = req.body.startDate;
  const length = req.body.length;

  const subscription = new Subscription({
    startDate: startDate,
    length: length
  });

  subscription.save()
    .then(result => {
      console.log('Subscription created.');
      res.send(subscription);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

//GET subscription by ID
exports.getSubscriptionById = (req, res, next) => {
  Subscription.findById(req.params.subscriptionId)
    .then(subscription => {
      res.send(subscription);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//PUT to update subscription by ID
exports.putSubscriptionById = (req, res, next) => {
  const startDate = req.body.startDate;
  const length = req.body.length;
  const subscriptionId = req.params.subscriptionId;

  Subscription.findById(subscriptionId)
  .then(subscription => {
    if (!subscription) {
      const error = new Error('Could not find subscription.');
      error.statusCode = 404;
      throw error;
    }

    subscription.startDate = startDate;
    subscription.length = length;

    return subscription.save();
  })
  .then(result => {
    res.status(200).send(result);
  })
  .catch(error => {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  })
};

//DELETE subscription by ID
exports.deleteSubscriptionById = (req, res, next) => {
  Subscription.findById(req.params.subscriptionId)
    .then(subscription => {
      // res.send(subscription);
      if (!subscription) {
        const error = new Error ('Could not find subscription.');
        console.log ("No subscription found.")
        error.statusCode = 404;
        throw error;
    }
    return Subscription.findByIdAndRemove(req.params.subscriptionId);
    })
    .then(result => {
      console.log(result);
      res.status(200).json({message: 'Subscription deleted.'});
    })
    .catch(err => {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  });
}
