//import {BosClient} from '@baiducloud/sdk';
const BosClient = require('@baiducloud/sdk').BosClient;
const config = require('./config');

/*
const config = {
    endpoint: <EndPoint>,         //传入Bucket所在区域域名
    credentials: {
        ak: <AccessKeyID>,         //您的AccessKey
        sk: <SecretAccessKey>       //您的SecretAccessKey
    }
};
*/
const client = new BosClient(config);

let bucket = 'yy-ai-train';
let key = 'dataset/zhangbiwu/package.js';
let data = {
    "name": "openresty",
    "description": "nginx+lua"
}

client.putObjectFromFile(bucket, key, __dirname + '/package.json')
    .then(response => console.log(response))    // 成功
    .catch(error => console.error(error));      // 失败