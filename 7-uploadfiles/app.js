var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

// cria um forms para enviar arquivo, depois de enviado, é movido para a pasta arquivos
http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:\\Users\\roxy22\\Documents\\portfolio\\projeto-22-NodeEstudos\\7-uploadfiles\\arquivos\\' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(202, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
}).listen(8080);