var util = require('util');
var request = require('request');
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';

module.exports = function(ctx, done) {

console.log(ctx.data);

var obj = {
    value1: encrypt(JSON.stringify(ctx.data), ctx.data.CRYPTO_PWD),
    value2: new Date()
};

console.log('Saving %s', util.inspect(obj, {
    color: true
}));

request.post(
    {
        url: ctx.data.IFTTT_HOOKS,
        form: obj
    }, function onDone(err, httpResponse, body) {
        if (err) {
            console.error(err);
        }
        var returnObj = {
            ifft_body_res: body,
            iftt_res: httpResponse,
            cyph: obj.payload
        };
        done(err, body);
    });
};

function encrypt(text, password) {
    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
