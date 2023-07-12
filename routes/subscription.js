const express = require('express'); 
const { body } = require('express-validator'); 
const isAuth = require('../middleware/is-auth'); 
const subscriptionController = require('../controllers/subscription'); 
const router = express.Router(); 

//GET all subscription
router.get('/subscription', subscriptionController.getSubscription);

//POST to add subscription
router.post('/add-subscription', subscriptionController.postAddSubscription);

//GET subscription by ID
router.get(
  '/subscription/:subscriptionId',
  subscriptionController.getSubscriptionById
);

//PUT to update subscription
router.put(
  '/edit-subscription/:subscriptionId',
  subscriptionController.putSubscriptionById
);

//DELETE subscription
router.delete(
  '/delete-subscription/:subscriptionId',
  subscriptionController.deleteSubscriptionById
);

module.exports = router;
