const mongoose = require('mongoose');

const dbConnect = ()=>{
    try{
        mongoose.connect(process.env.DATABASE_URL);
        console.log(`database connect successfully`);
    } catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = dbConnect
