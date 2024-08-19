const categoryModel = require('../models/categoryModal');
const identity = require('../controller/identityController');

// Get all list of Category Type
exports.getAllCategory = (request, response, next) => {
    categoryModel.find().then(data=>{
        return response.status(201).json({result:data});
    }).catch(error=>{
        return response.status(500).json({
            message: "Something wrong",
            error: error
        })
    });
}

// Get category by id
exports.getCategoryById = (request, response, next) => {
    categoryModel.findById(request.query.id).then(data=>{
        return response.status(201).json({
            result: data
        })
    }).catch(error=>{
        return response.status(201).json({
            message: "Category not found",
            error: data
        })
    });
}

// Save and update category type
exports.saveUpdateCategory = (request, response, next) => {
    const category = new categoryModel();
    const dateTime = new Date();
    if (request.body.id != null || request.body.id != undefined) {
        categoryModel.updateOne({ _id: request.body.id },{
            $set:{
                CategoryName: request.body.CategoryName,
                UpdatedOn: dateTime.toISOString().slice(0,10),
                UpdatedBy: global.userLoggedInId
            }
        }).then(data => {
            if(data.modifiedCount){
                return response.status(201).json({
                    message: "Category updated successfully",
                    result: data
                })
            }else{
                return response.status(201).json({
                    message: "Cannot find category type",
                    result: data
                })
            }
        }).catch(error => {
            return response.status(201).json({
                message: "Something Wrong",
                result: error
            })
        });
    } else {
        category.CategoryName = request.body.CategoryName;
        category.CreatedOn = dateTime.toISOString().slice(0,10);
        category.UpdatedOn = null;
        category.CreatedBy = global.userLoggedInId;
        category.UpdatedBy = null;
        
        categoryModel.exists({CategoryName: request.body.CategoryName}).collation({locale: 'en', strength: 2}).then(data=>{
            if(data != null || data != undefined){
                return response.status(201).json({
                    message: "Category already added"
                });
            }else{
                category.save().then(data => {
                    return response.status(201).json({
                        message: "Category added successfully",
                        result: data
                    });
                }).catch(error => {
                    return response.status(500).json({
                        message: "Something worng",
                        result: error
                    })
                });
            }
        }).catch(error=>{
            return response.status(500).json({
                message: "Something worng",
                result: error
            })
        })
        
    }

}

// delete category by id
exports.deleteCategory = (request, response, next) => {
    const categoryId = request.query.id;
    categoryModel.deleteOne({_id: categoryId}).then(data=>{
        if(data.deletedCount){
            return response.status(201).json({
                message: "Category deleted successfully"
            })
        }
    }).catch(error=>{
        return response.status(500).json({
            message: "Category not found",
            result: error
        })
    })
}