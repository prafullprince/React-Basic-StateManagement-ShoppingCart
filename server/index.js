const express = require('express');
const app = express();
require('dotenv').config();

// import
const database = require('./config/database');
const cloudinaryConnect = require('./config/cloudinary');
const fileUpload = require('express-fileupload');

// make port
const PORT = process.env.PORT;

// add middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles:true,tempFileDir:'/tmp/'
}));

// connection with db
database();
cloudinaryConnect();

// start our server
app.listen(PORT,()=>{
    console.log(`server started successfully at port ${PORT}`);
});
