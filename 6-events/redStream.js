var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
// chama essa função sempre que o arquivo demofile.txt é aberto
rs.on('open', function() {
    console.log('The file is open');
})