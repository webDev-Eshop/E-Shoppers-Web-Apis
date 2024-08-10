const express = require('express');
const route = express.Router();
const user = require('../controller/userController');
const auth = require('../middlewares/auth');

route.get('/',auth.authenticate, user.GetUserById);
route.post('/update-user',auth.authenticate, user.UpdateUser);
module.exports = route;