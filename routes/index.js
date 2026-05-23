const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/recipes', require('./recipesRoute'));
routes.use('/ingredients', require('./ingredients'));

module.exports = routes;