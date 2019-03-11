const mongoose = require('mongoose');

var exampleSchema = new mongoose.Schema({
  roll: Number
});

var ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;
