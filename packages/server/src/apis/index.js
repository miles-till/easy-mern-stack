const registerExampleApis = require('./ExampleApi');

const registerApis = app => {
  registerExampleApis(app);
}

module.exports = registerApis;
