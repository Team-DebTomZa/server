const express = require('express');
const cors = require('cors');
const { saveData, getData } = require('./utils');
const { Journal } = require('./models');
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.get('/', (req,res) => {
    res.json('Server is up and running - woop!!');
});

//Use this route with the GET method to retreive all of the journal entries that are saved in the journals.json file.
app.get('/journals', (req,res) => {
    const journals = getData();
    res.json(journals);
})

//Use this route with the POST method to add a new journal to the journals.json file.
app.post('/journals', (req,res) => {

    //get the existing journal entries using the utility function getData (see utils.js)
    const journals = getData();

    //get the data sent from the client
    const data = req.body;

    //logic for assigning the id to the new journal entry
    let id;
    if (journals.length === 0){
        id = 1;
    } else {
        let lastJournalEntry = journals[journals.length-1];
        id = lastJournalEntry.id + 1;
    }

    //check if any required fields are missing from the request
    if ( !data.title || !data.content ){
        return res.status(401).json({error: true, message: 'Required data field missing - no title or no content received'})
    }

    //create the new journal and then append it to the journals array. Save this updated array to the json file.
    const newJournalEntry = new Journal(id, data.title, data.content);
    journals.push(newJournalEntry);
    saveData(journals); //this utility function is from the utils.js file
    res.status(201).json({success: true, message: 'Entry added successfully'})
})

module.exports = { app };




