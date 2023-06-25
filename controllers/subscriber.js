const Subscriber = require('../models/subscriber');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Added comments for each controller export to be placed.
 * Make sure to un-comment the route in /routes/subscriber.js before testing.
 */

//POST to add subscriber
exports.postAddSubscriber = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const subscriber = new Subscriber({
        lastName: lastName,
        firstName: firstName,
        email: email,
        username: username,
        password: hashedPw,
      });
      return subscriber.save();
    })

    .then((result) => {
      res
        .status(201)
        .json({ message: 'Subscriber created.', subscriberId: result._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

//GET subscriber by ID
exports.getSubscriberById = (req, res, next) => {
  Subscriber.findById(req.params.subscriberId)
    .then((subscriber) => {
      res.send(subscriber);
    })
    .catch((error) => {
      return res.status(500).send(error);
    });
};

//PUT to update subscriber by ID
exports.putUpdateSubscriber = (req, res, next) => {
  const authSubscriberId = req.subscriberId;
  const subscriberId = req.params.subscriberId;

  //Authorize subscriber
  if (subscriberId !== authSubscriberId) {
    const error = new Error('Subscriber not authorized.');
    error.statusCode = 403;
    throw error;
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  Subscriber.findById(subscriberId)
    .then((subscriber) => {
      if (!subscriber) {
        const error = new Error('Could not find subscriber.');
        error.statusCode = 404;
        throw error;
      }
      bcrypt.hash(password, 12).then((hashedPw) => {
        subscriber.lastName = lastName;
        subscriber.firstName = firstName;
        subscriber.email = email;
        subscriber.username = username;
        subscriber.password = hashedPw;
        return subscriber.save();
      });
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

//DELETE subscriber by ID
exports.deleteSubscriber = (req, res, next) => {
  const authSubscriberId = req.subscriberId;
  const subscriberId = req.params.subscriberId;

  //Authorize subscriber
  if (subscriberId !== authSubscriberId) {
    const error = new Error('Subscriber not authorized.');
    error.statusCode = 403;
    throw error;
  }

  Subscriber.findById(req.params.subscriberId)
    .then((subscriber) => {
      if (!subscriber) {
        const error = new Error('Could not find Subscriber.');
        console.log('No subscriber found.');
        error.statusCode = 404;
        throw error;
      }

      return Subscriber.findByIdAndRemove(req.params.subscriberId);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: 'Subscriber deleted. ',
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

//POST to add login Subscriber
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedSubscriber;

  Subscriber.findOne({
    email: email,
  })
    .then((subscriber) => {
      if (!subscriber) {
        const error = new Error(' Username or password were invalid');
        error.statusCode = 401;
        throw error;
      }
      loadedSubscriber = subscriber;

      return bcrypt.compare(password, subscriber.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error('Wrong username or password');
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedSubscriber.email,
          subscriberId: loadedSubscriber._id.toString(),
        },
        process.env.SECRET_STRING,
        {
          expiresIn: '1h',
        }
      );

      res.header('Authorization', 'Bearer ' + token);

      res.status(200).json({
        token: token,
        subscriberId: loadedSubscriber._id.toString(),
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
