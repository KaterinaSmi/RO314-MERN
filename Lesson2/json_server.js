var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200,{"Content-type": 'text/json'});
        var data = require('./persons.json');
        res.write(JSON.stringify(data));
        res.end('<h1>This is the end of JSON file</h1>\n');
    }
});

var port = process.env.PORT || 3001;
server.listen(port);

console.log('Server is running at http://localhost:3001/')