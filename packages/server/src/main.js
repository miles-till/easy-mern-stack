console.log('easy-mern-stack');
console.log(`Node environment: ${process.env.NODE_ENV || 'development'}`);

// configure express
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// register api calls
const registerApis = require('./apis');
registerApis(app);

// serve client app in production
if (process.env.NODE_ENV === 'production') {
  // serve static files
  app.use(express.static(path.resolve(__dirname, 'app/build')));

  // return all requests to react app, let react-router handle routing 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app/build', 'index.html'));
  });
}

// start listening
app.listen(port, () => console.log(`Express listening on port ${port}`));

// configure mongoose
const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/easy-mern-stack-db';

console.log('Mongoose attempting to connect to MongoDB');
const db = mongoose.connection;
db.on('error', () => console.error.bind(console, 'Mongoose connection error:'));
db.once('open', () => console.log('Mongoose connected to MongoDB'));

mongoose.connect(mongoUrl, { useNewUrlParser: true });
