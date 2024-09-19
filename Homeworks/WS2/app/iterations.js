var fs = require('fs');
var data = require('./sampledata.json');
var http = require('http');

var html = '<table border="1">\n<tr>\n<th>Name</th><th>Age</th><th>Company</th><th>Address</th><tr/>\n'

// data.map(item => {
//     console.log(item.name);
//     console.log(item.age);
//     console.log(item.company);
//     console.log(item.address);
// });

data.map(item => {
   html += `<tr>\n<td>${item.name}</td>\n<td>${item.age}</td>\n<td>${item.company}</td>\n<td>${item.address}</td></tr>\n`;

});

html += '</table>';



console.log(html);

fs.writeFileSync('output.html', html,'utf8');
console.log("HTML table written successfully")

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(500, {"Content-Type": "text/html"});
        res.end(html);
    
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found\n');
    }
});
var port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log("sever is running at port 3001")
});