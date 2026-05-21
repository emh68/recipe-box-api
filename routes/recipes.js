const routes = require('express').Router();

// A simple test route
routes.get('/', (req, res) => {
    res.send('This is the recipes route'); 
});

module.exports = routes;