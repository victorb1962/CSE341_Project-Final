const express = require('express');
const { body } = require('express-validator'); 
const subscriberController = require('../controllers/subscriber'); 
const router = express.Router(); 
const isAuth = require('../middleware/is-auth'); 
const Subscriber = require('../models/subscriber'); 

// // PUT request to allow editing on a subscriber profile.
// router.put(
//     'subscriberEdit/:subscriberId', subscriberController.updateSubscriber
// );

/**
 * There is a sample subscriber in mongoDB that can be used for testing. 
 * Only uncomment your route when you have your controller working/during testing. 
 */

//POST to add subscriber
router.post(
  '/add-subscriber',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return Subscriber.findOne({ email: value }).then((subscriberDoc) => {
          if (subscriberDoc) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
      })
      .normalizeEmail(),
    body('subscriberKey').trim().isInt(),
    body('lastName').trim().not().isEmpty(),
    body('firstName').trim().not().isEmpty(),
    body('username').trim().not().isEmpty(),
    body('password').trim().isLength({ min: 5 }),
  ],
  subscriberController.postAddSubscriber
);

//GET subscriber by ID
router.get(
  '/subscribers/:subscriberId',
  subscriberController.getSubscriberById
);

//PUT to update subscriber
router.put(
  '/edit-subscriber/:subscriberId',
  isAuth,
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return Subscriber.findOne({ email: value }).then((subscriberDoc) => {
          if (subscriberDoc & (subscriberDoc.email !== value)) {
            return Promise.reject('E-Mail address already exists!');
          }
        });
      })
      .normalizeEmail(),
    body('subscriberKey').trim().isInt(),
    body('lastName').trim().not().isEmpty(),
    body('firstName').trim().not().isEmpty(),
    body('username').trim().not().isEmpty(),
    body('password').trim().isLength({ min: 5 }),
  ],
  subscriberController.putUpdateSubscriber
);

//DELETE subscriber
router.delete(
  '/delete-subscriber/:subscriberId',
  isAuth,
  subscriberController.deleteSubscriber
);

//POST to add login subscriber
router.post('/login', subscriberController.login);

module.exports = router;
