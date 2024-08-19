const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        unique: true,
        required: true
    },
    CreatedBy:{
        type: String
    },
    UpdatedBy:{
        type: String
    },
    CreatedOn:{
        type: String
    },
    UpdatedOn: {
        type: String
    }
});

module.exports = mongoose.model('Category', CategorySchema);