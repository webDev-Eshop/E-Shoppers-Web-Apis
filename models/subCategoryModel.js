const mongoose = require('mongoose');
const subCategorySchema = new mongoose.Schema({
    SubCategoryName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    CategoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    CreatedBy:{
        type: String
    },
    UpdatedBy:{
        type: String
    },
    CreatedOn:{
        type: String,
    },
    UpdatedOn:{
        type: String
    }
});

module.exports = mongoose.model('SubCategory', subCategorySchema);