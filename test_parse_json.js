var msgpack = require('msgpack');
var fs = require('fs');

var document = fs.readFileSync('document.json');

for (var i = 0;i<1000000;i++) {
    JSON.parse(document);
}
