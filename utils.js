const fs = require('fs');
const path = require('path');

let jsonPath = path.resolve(__dirname, './journals.json');

function saveData(data){
    const stringData = JSON.stringify(data);
    fs.writeFileSync(jsonPath, stringData);
}

function getData(){
    const jsonData = fs.readFileSync(jsonPath);
    return JSON.parse(jsonData);
}

module.exports = { saveData, getData };