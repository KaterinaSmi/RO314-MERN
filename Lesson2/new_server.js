var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200,{"Content-type": 'text/html'});
        res.end('<h1>Thi is the first note.js server</h1>\n');
    }
    else if(req.url === '/myBlog'){
        res.writeHead(200,{"Content-type": 'text/html'});
        res.end('<h1>This is myBlog page.</h1>\n');
    }
});

// var port = process.env.PORT || 3000;
// server.listen(port);

// console.log('Server is running at http://localhost:3000/')