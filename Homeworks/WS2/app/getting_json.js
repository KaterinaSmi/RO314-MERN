var fs = require('fs');
var axios = require('axios');

const url = 'https://pastebin.com/raw/007hQiM4';
const filePath = 'sampledata.json';

axios.get(url)
.then(response => {
    const data = response.data
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString);
    console.log('Data saved successfully to ', filePath)
}).catch(function(err){
    console.error("Error fetching data" , err);
})
