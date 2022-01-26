const client = require('./bce_client');

let key = 'dataset/zhangbiwu/package.js';
client.putObjectFromString(key, __dirname + '/package.json');


key = 'dataset/zhangbiwu/hello.js';
let data = {
    "name": "openresty",
    "description": "nginx+lua"
}
client.putObjectFromString(key, JSON.stringify(data));


let count = 0;
setInterval(() => {
    let key = `dataset/zhangbiwu/yy2022/test${count++}.js`;
    if (count > 1000) count = 0;
    
    let data = {
        "name": "openresty",
        "description": "nginx+lua"
    }

    client.putObjectFromString(key, JSON.stringify(data));
}, 2000);
