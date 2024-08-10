const express = require('express');
const route = express.Router();
const subCategory = require('../controller/subCategoryCotroller');

route.post('/saveSubCategory',subCategory.saveUpdateSubCategory);
route.post('/updateSubCategory',subCategory.saveUpdateSubCategory);
route.get('/getAll',subCategory.getAllSubCategory);
route.get('/getSubCategory',subCategory.getSubCategoryById); // Get SubCategory by id
route.get('/getSubCategoryByCategory',subCategory.getSubCategoryByCategoryId); // Get SubCategory by Category id
route.post('/deleteSubCategory',subCategory.deleteSubCategory); // Delete SubCategory by id
module.exports = route;