const express = require('express');
const cors = require('cors');
const app = express();


//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.get('/', (req,res) => {
    res.json('Server is up and running - woop!!');
});

module.exports = { app };




