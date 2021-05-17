//load mongoose
const mongoose = require('mongoose');  

//fetch uri
const uri = `mongodb+srv://imfraser:${process.env.MONGO_PW}@cluster0.vzbjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

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
        await mongoose.connect(uri, connectOptions); 
        console.log('Connected to MongoDB...');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

