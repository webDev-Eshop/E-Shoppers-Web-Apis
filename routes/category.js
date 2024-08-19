const express = require('express');
const route = express.Router();
const category = require('../controller/categoryController');
const auth = require('../middlewares/auth');

route.post('/saveCategory',auth.authenticate,category.saveUpdateCategory);
route.post('/updateCategory',auth.authenticate,category.saveUpdateCategory); // Update Category By Id, Category Id Get in query parameter
route.get('/getAll',auth.authenticate,category.getAllCategory);
route.get('/getCategory',auth.authenticate,category.getCategoryById); // Get Category By Id, Category Id Get in query parameter.
route.post('/deleteCategory',auth.authenticate,category.deleteCategory);  // Delete Category By Id , Category id Get in Query String Parameter
module.exports = route;