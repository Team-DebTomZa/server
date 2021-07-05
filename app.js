const express = require('express');
const cors = require('cors');
const { saveData, getData } = require('./utils');
const Journal = require('./models');
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//GENERAL ROUTES
app.get('/', (req,res) => {
    res.json('Server is up and running - woop!!');
});

//JOURNAL ROUTES

//Use this route to get all of the journal entries that are saved in the journals.json file.
app.get('/journals', (req,res) => {
    const journals = getData();
    res.json(journals);
})

module.exports = { app };




