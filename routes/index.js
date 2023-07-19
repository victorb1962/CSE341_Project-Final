const express = require('express');
const router = express.Router();

//routes
router.use('/', require('./swagger'));  // use swagger routes located at \routes\swagger.js
router.use('/magazine', require('./magazine'));
router.use('/subscriber', require('./subscriber'));
router.use('/subscription', require('./subscription'));
router.use('/category', require('./category'));

//export
module.exports = router;
