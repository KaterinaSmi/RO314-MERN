var fs = require('fs');
var axios = require('axios');
var http = require('http');

const url = 'https://pastebin.com/raw/007hQiM4';
const filePath = 'last_exercise.json';

axios.get(url)
.then(response => {
    const data = response.data
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString);
  
    console.log('Data was written successfully');


const newPerson = {
    name: 'John Doe',
    age: 52,
    company: 'Laurea',
    address: 'Ratatie 22'
};

let parsedData = JSON.parse(jsonString);

parsedData.push(newPerson);
parsedData.pop();

const updatedJsonString = JSON.stringify(parsedData, null, 2);
fs.writeFileSync(filePath, updatedJsonString);
console.log(updatedJsonString)

http.createServer((req, res)=> {
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(updatedJsonString)
    }else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Pagenot found\n');
    }
}).listen(3001,() => {
    console.error("Server is running at http://localhost:3001/");
});

}).catch((err)=>{
    console.error("Error fetching data", err)
});

