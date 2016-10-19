var msgpack = require('msgpack');
var fs = require('fs');
var assert = require('assert');

var documentJson = fs.readFileSync('document.json');
var jsonString = JSON.parse(documentJson);
var documentMsgPack = msgpack.pack(jsonString);
fs.writeFile('document.msgpack', documentMsgPack);

assert.deepEqual(jsonString, msgpack.unpack(documentMsgPack));

console.log('File <document.msgpack> generated successfully from <document.json>');
