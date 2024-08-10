const express = require('express');
const route = express.Router();
const category = require('../controller/categoryController');

route.post('/saveCategory',category.saveUpdateCategory);
route.post('/updateCategory',category.saveUpdateCategory); // Update Category By Id, Category Id Get in query parameter
route.get('/getAll',category.getAllCategory);
route.get('/getCategory',category.getCategoryById); // Get Category By Id, Category Id Get in query parameter.
route.post('/deleteCategory',category.deleteCategory);  // Delete Category By Id , Category id Get in Query String Parameter
module.exports = route;