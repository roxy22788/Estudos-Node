var http = require('http');
var url = require('url');

// entrada: http://localhost:8080/?year=2017&month=July
// saida: 2017 July
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);