//import {BosClient} from '@baiducloud/sdk';
const BosClient = require('@baiducloud/sdk').BosClient;
const config = require('./config');
const bucket = 'yy-ai-train';
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

function putObjectFromFile(object, filePath) {
    client.putObjectFromFile(bucket, object, filePath)
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

function putObjectFromString(object, data) {
    client.putObjectFromString(bucket, object, data)
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

function putObject(object, filePath) {
    client.putObject(bucket, object, filePath)
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

module.exports = {
    putObjectFromFile,
    putObjectFromString,
    putObject,
}