const routes = require('express').Router();

// routes.use('/', require('./swagger'));
routes.use('/recipes', require('./recipes'));
// routes.use('/ingredients', require('./ingredients'));

module.exports = routes;