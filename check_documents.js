var msgpack = require('msgpack');
var fs = require('fs');
var assert = require('assert');

var documentJson = fs.readFileSync('document.json');
var jsonString = JSON.parse(documentJson);
var documentMsgPack = fs.readFileSync('document.msgpack');

assert.deepEqual(jsonString, msgpack.unpack(documentMsgPack));

console.log('Content matches!');
