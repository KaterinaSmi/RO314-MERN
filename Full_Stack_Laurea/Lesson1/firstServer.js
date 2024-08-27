var http = require('http');

//sednd http request header, http status: 200 : OK, Content Type: text/ plain
http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHeader(200, {'Content-Type': 'text/plain'});
        res.end('This my first node.js server\n');
    }
    if(req.url === '/myBlog'){
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end('<html>\n' +
            '<head>\n' +
            '<title>My Blog Table</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '    <h1>Welcome to My Blog</h1>\n' +
            '    <table border="1">\n' +
            '        <tr>\n' +
            '            <th>Name</th>\n' +
            '            <th>Address</th>\n' +
            '            <th>City</th>\n' +
            '        </tr>\n' +
            '        <tr>\n' +
            '            <td>John Doe</td>\n' +
            '            <td>123 Main St</td>\n' +
            '            <td>New York</td>\n' +
            '        </tr>\n' +
            '        <tr>\n' +
            '            <td>Matti Meikäiläinen</td>\n' +
            '            <td>Timotie 1, as 10</td>\n' +
            '            <td>Tampere</td>\n' +
            '        </tr>\n' +
            '        <tr>\n' +
            '            <td>Maija Virtainen</td>\n' +
            '            <td>Asematie 12</td>\n' +
            '            <td>Kiljava</td>\n' +
            '        </tr>\n' +
            '    </table>\n' +
            '</body>\n' +
            '</html>\n'
        );
    }
        if(req.url === '/myPlayList'){
            res.writeHeader(200,{'Content-Type': 'text/html'});
            res.end(
                '<html>\n' +
                '<head>\n' +
                '<title> My Music Playlist </title>\n' +
                '<style>\n' +
                '  body { font-family: Arial, sans-serif; margin: 20px; }\n' +
            '  h1 { text-align: center; color: #333; }\n' +
            '  .playlist { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; }\n' +
            '  .song { margin-bottom: 15px; padding: 10px; border-bottom: 1px solid #ccc; }\n' +
            '  .song:last-child { border-bottom: none; }\n' +
            '  .title { font-weight: bold; color: #000; }\n' +
            '  .artist, .album { color: #666; }\n' +
            '  .song-number { font-size: 1.2em; margin-right: 10px; color: #007bff; }\n' +
            '</style>\n' +
            '</head>\n' +
            '<body>\n' +
            '    <h1>My Music Playlist</h1>\n' +
            '    <div class="playlist">\n' +
            '        <div class="song">\n' +
            '            <span class="song-number">1.</span>\n' +
            '            <span class="title">Bohemian Rhapsody</span>\n' +
            '            <br>\n' +
            '            <span class="artist">Queen</span>\n' +
            '            <br>\n' +
            '            <span class="album">A Night at the Opera</span>\n' +
            '        </div>\n' +
            '        <div class="song">\n' +
            '            <span class="song-number">2.</span>\n' +
            '            <span class="title">Hotel California</span>\n' +
            '            <br>\n' +
            '            <span class="artist">Eagles</span>\n' +
            '            <br>\n' +
            '            <span class="album">Hotel California</span>\n' +
            '        </div>\n' +
            '        <div class="song">\n' +
            '            <span class="song-number">3.</span>\n' +
            '            <span class="title">Stairway to Heaven</span>\n' +
            '            <br>\n' +
            '            <span class="artist">Led Zeppelin</span>\n' +
            '            <br>\n' +
            '            <span class="album">Led Zeppelin IV</span>\n' +
            '        </div>\n' +
            '        <div class="song">\n' +
            '            <span class="song-number">4.</span>\n' +
            '            <span class="title">Imagine</span>\n' +
            '            <br>\n' +
            '            <span class="artist">John Lennon</span>\n' +
            '            <br>\n' +
            '            <span class="album">Imagine</span>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</body>\n' +
            '</html>\n'
            )
        
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found\n');
    }
   
}).listen(3000);

console.log('Server running at http://localhost:3000/');