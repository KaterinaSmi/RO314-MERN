const http = require('http');
const axios = require('axios');

const PORT = 3000;
const url = 'https://www.omdbapi.com/?s=star+wars&apikey=fcfbfbef';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        axios.get(url)
            .then(response => {
                const data = response.data;
                console.log(data); // Log the entire data response for inspection

                // Check if 'Search' exists and is an array
                if (data.Response === 'True' && Array.isArray(data.Search)) {
                    let html = `
                    <html>
                    <head>
                        <title>Favourite Movies</title>
                        <style>
                            table {
                                width: 100%;
                                border-collapse: collapse;
                            }
                            th, td {
                                border: 1px solid #ddd;
                                padding: 8px;
                                text-align: left;
                            }
                            th {
                                background-color: #f2f2f2;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>My Favorite Movies/Series</h1>
                        <table>
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Type</th>
                                <th>Poster</th>
                            </tr>
                    `;

                    // Map over the data and create table rows
                    data.Search.forEach(item => {
                        html += `
                        <tr>
                            <td>${item.Title}</td>
                            <td>${item.Year}</td>
                            <td>${item.Type}</td>
                            <td><img src="${item.Poster}" alt="${item.Title} Poster" style="width: 100px;"></td>
                        </tr>
                        `;
                    });

                    html += `
                    </table>
                    </body>
                    </html>
                    `;
                    
                    // Send the HTML response once
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(html);
                } else {
                    console.error("No results found or invalid data format:", data);
                    // Ensure this block only runs if the response hasn't been sent
                    if (!res.headersSent) {
                        res.statusCode = 500;
                        res.end(JSON.stringify({ message: "No results found or invalid data format" }));
                    }
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Ensure this block only runs if the response hasn't been sent
                if (!res.headersSent) {
                    res.statusCode = 500;
                    res.end(JSON.stringify({ message: "Error fetching data" }));
                }
            });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
