//load and initalize express server
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

//add express port
const PORT = process.env.PORT || 3001;

//connect to database
const connectDB = require('./config/db')
connectDB();

//return response for testing 
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static('build'));

//allow cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "www.ifurl.page");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/genurl', require('./routes/genUrl'));
app.use('/', require('./routes/redirect'));

//start express server 
app.listen(PORT, () => {
    console.log('Server started on port', PORT)
});