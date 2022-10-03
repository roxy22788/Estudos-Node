var fs = require('fs');

fs.appendFile('./test/mynewfile1.txt', 'hello arquivo', (err) => {
    if (err) throw err;
    console.log(err);
});