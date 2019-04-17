const qiniu = require('qiniu');


var accessKey = 'your access key';
var secretKey = 'your secret key';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);


var options = {
    scope: bucket,//空间名
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);

module.exports = uploadToken;




