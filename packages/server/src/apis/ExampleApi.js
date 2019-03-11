const mongoose = require('mongoose');
const ExampleModel = require('../models/ExampleModel');
const HttpStatus = require('http-status-codes');
const { apiEndpoints } = require('easy-mern-stack-shared');

const registerApis = app => {
  // getAll
  app.get(apiEndpoints.examples.getAll, (req, res) => {
    ExampleModel.find((err, result) => {
      if (err) {
        console.error(err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        return;
      }
      
      res.send({ examples: result });
    });
  });
  
  // create
  app.post(apiEndpoints.examples.create, (req, res) => {
    new ExampleModel({
      roll: Math.round(Math.random() * 100)
    }).save((err, result) => {
      if (err) {
        console.error(err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        return;
      }

      res.send(result);
    });
  });

  // reroll
  app.post(apiEndpoints.examples.reroll, (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(HttpStatus.BAD_REQUEST).send('Invalid parameter id.');
      return;
    }

    const example = {
      roll: Math.round(Math.random() * 100)
    };

    ExampleModel.findByIdAndUpdate(req.params.id, example, { new: true }, (err, result) => {
      if (err) {
        console.error(err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        return;
      }
      
      res.send(result);
    });
  });

  // delete
  app.post(apiEndpoints.examples.delete, (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(HttpStatus.BAD_REQUEST).send('Invalid parameter id.');
      return;
    }

    ExampleModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) {
        console.error(err);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        return;
      }
      
      res.send();
    });
  });
}

module.exports = registerApis;
