require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(bodyParser.json());
const mongoose = require('mongoose');
const login = require('./routes/login');
const productCategory = require('./routes/productCategory');
const category = require('./routes/category');
const subCategory = require('./routes/subCategory');
const user = require('./routes/user');
mongoose.connect(process.env.MONGODB_STRING).then(data => {
    app.listen(port, () => {
        app.use('/api', login);
        app.use('/api/user', user);
        //app.use('/Category',productCategory)
        app.use('/api/Category',category)
        app.use('/api/SubCategory',subCategory)
        console.log(`Server is running on port number ${port}`);
        console.log(`Database connected succesfully`);
    })
}).catch(err => {
    console.log(err);
})