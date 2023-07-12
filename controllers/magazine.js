const Magazine = require('../models/magazine')
//const isAuth = require('../middleware/is-auth')
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

/**
 * Added comments for each controller export to be placed. 
 * Make sure to un-comment the route in /routes/magazine.js before testing.
 */

//GET all magazine
exports.getAllMagazine = (req, res, next) => {
  Magazine.find()
    .then(magazine => {
      res.send(magazine); 
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//POST to add magazine
exports.postAddMagazine = (req, res, next) => {
  const magazineKey = req.body.magazineKey;
  const title = req.body.title;
  const category_list = req.body.category_list;
  const price = req.body.price;
  const publisher = req.body.publisher;
  const url = req.body.url;

  let categoryObjArray = category_list.map(s => mongoose.Types.ObjectId(s));

  const magazine = new Magazine({
    magazineKey: magazineKey,
    title: title,
    category_list: categoryObjArray,
    price: price,
    publisher: publisher,
    url: url
  });

  magazine.save()
    .then(result => {
      console.log('Magazine created.');
      res.send(magazine);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
};

//GET magazine by ID
exports.getMagazineById = (req, res, next) => {
  Magazine.findById(req.params.magazineId)
    .then(magazine => {
      res.send(magazine);
    })
    .catch(error => {
      return res.status(500).send(error);
    });
}

//PUT to update magazine by ID
exports.putUpdateMagazine = (req, res, next) => {
  const magazineID = req.params.magazineId;
  const magazineKey = req.body.magazineKey;
  const title = req.body.title;
  const category_list = req.body.category_list;
  const price = req.body.price;
  const publisher = req.body.publisher;
  const url = req.body.url;

  let categoryObjArray = category_list.map(s => mongoose.Types.ObjectId(s));

  Magazine.findById(magazineID)
  .then(magazine => {
    if (!magazine) {
      const error = new Error('Could not find magazine.');
      error.statusCode = 404;
      throw error;
    }

    if (magazine.publisher.toString() !== publisher) {
      const error = new Error('Subscriber not authorized. Must be the Publisher.');
      error.statusCode = 403;
      throw error;
    }
    magazine.magazineKey = magazineKey;
    magazine.title = title;
    magazine.category = category;
    magazine.price = price;
    magazine.publisher = publisher;
    magazine.url = url;

    return magazine.save();
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

//DELETE magazine by ID
exports.deleteMagazine = (req, res, next) => {
  const publisher = req.subscriberId;

  //get recipie id, delete magazine,
  Magazine.findById(req.params.magazineId)
  .then(magazine => {
      if (!magazine) {
          const error = new Error ('Could not find magazine.');
          error.statusCode = 404;
          throw error;
      }
      //Authorize user
      if (magazine.publisher.toString() !== publisher) {
        const error = new Error('Subscriber not authorized. Must be the Publisher.');
        error.statusCode = 403;
        throw error;
      }

      return Magazine.findByIdAndRemove(req.params.magazineId);

  })
  .then(result => {
      console.log(result);
      res.status(200).json({message: 'Magazine deleted.'});
  })
  .catch(err => {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  });
  
};
