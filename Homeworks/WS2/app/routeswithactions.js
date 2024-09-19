var http = require('http');
var fs = require('fs');


//sednd http request header, http status: 200 : OK, Content Type: text/ plain
http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Nothing here to see\n');
    }
    else if(req.url === '/frontpage'){
        var filePath = 'frontpage.html';
        fs.readFile(filePath, function(err,data){
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error\n');
                console.error("Error reading file:", err);
                return
            }
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(data)
        })

    } else if(req.url === '/contact'){
      filePath = 'contact.html';
      fs.readFile(filePath, function(err,data){
        if (err){
            console.error("Error reading file", err)
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
      })
    }else if(req.url === '/plaintext'){
        var data = fs.readFileSync('text.txt');
        console.log(data.toString());
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data.toString());
    }else if(req.url === '/json'){
       const filePath = 'sampledata.json';
       fs.readFile(filePath, 'utf8',function(err,data){
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error\n');
            console.error("Error reading file:", err);
            return;
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
       });
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found\n');
    }
}).listen(3000);