const client = require('./bce_client');
const fs = require('fs');

// 以file形式上传
let key = 'dataset/zhangbiwu/package.js';
client.putObjectFromString(key, __dirname + '/package.json');


// 以string形式上传
key = 'dataset/zhangbiwu/hello.js';
let data = {
    "name": "openresty",
    "description": "nginx+lua"
}
client.putObjectFromString(key, JSON.stringify(data));


// 以buffer形式上传
let object = 'dataset/zhangbiwu/yylive123.txt';
let buffer = new Buffer('hello world'); 
client.putObject(object, buffer)


let bf = fs.readFileSync('./seaweedfs.png');
object = 'dataset/zhangbiwu/seaweedfs_test.png';
buffer = Buffer.from(bf); 
client.putObject(object, buffer)

