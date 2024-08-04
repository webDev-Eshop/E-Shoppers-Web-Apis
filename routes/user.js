const express = require('express');
const route = express.Router();
const user = require('../controller/userController');

route.get('/:userId', user.GetUserById);
route.post('/update-user', user.UpdateUser);
// route.post('/register', login.register);
// route.post('/forget', login.forgotPassword);
module.exports = route;