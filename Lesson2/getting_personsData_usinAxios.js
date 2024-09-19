const axios = require('axios');
const fs = require('fs');

const url = 'https://pastebin.com/raw/007hQiM4';
const filePath = 'persons.json';

axios.get(url)
.then(response => {
    const data = response.data
    const jsonString = JSON.stringify(data, null, 2); 
    fs.writeFileSync(filePath, jsonString)
    console.log('Data saved successfully to '+ filePath)
})
.catch(function(err){
    console.error("Error fetching data" + err)
});