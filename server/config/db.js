//load mongoose
const mongoose = require('mongoose');  
//load config 
const config = require('config');
//fetch uri
const db = config.get('mongouri');

//set up options for connection
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

//connect to MongoDB
const connectDB = async () => {
    try{
        await mongoose.connect(db, connectOptions); 
        console.log('Connected to MongoDB...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

