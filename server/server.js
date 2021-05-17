//load and initalize express server
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//add express port
const PORT = process.env.PORT || 3001;

//connect to database
const connectDB = require('./config/db')
connectDB();

//return response for testing 
app.use(cors());
app.use(express.json());
app.use('/api/genurl', require('./routes/genUrl'));
app.use('/', require('./routes/redirect'));

//start express server 
app.listen(PORT, () => {
    console.log('Server started on port', PORT)
});