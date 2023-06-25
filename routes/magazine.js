const express = require('express'); 
const router = express.Router(); 
const magazineController = require('../controllers/magazine'); 
const { body } = require('express-validator'); 
const isAuth = require('../middleware/is-auth'); 

/*
 * Currently the POST route is working, and successfully adding magazines to the database. There is a sample magazine in mongoDB that can be used for testing. 
 * Uncomment your route when you have your controller working/during testing. 
 */

//GET all magazines
router.get('/magazines', magazineController.getMagazines);

//POST to add magazine
router.post(
  '/add-magazine',
  isAuth,
  [
    body('title').trim().isLength({ min: 5 }),
    body('category').isArray(),
    body('price').trim().isInt(),
    body('url').trim().isLength({ min: 5 }),
  ],
  magazineController.postAddMagazine
);
//GET magazine by ID
router.get('/magazines/:magazineId', magazineController.getMagazineById);

//PUT to update magazine by ID
router.put(
  '/edit-magazine/:magazineId',
  isAuth,
  [
    body('title').trim().isLength({ min: 5 }),
    body('category').isArray(),
    body('price').trim().isInt(),
    body('url').trim().isLength({ min: 5 }),
  ],
  magazineController.putUpdateMagazine
);

//DELETE magazine
router.delete(
  '/delete-magazine/:magazineId',
  isAuth,
  magazineController.deleteMagazine
);

module.exports = router;
