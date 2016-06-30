var util = require('util');
var request = require('request');
var crypto = require('crypto');
var algorithm = 'aes-256-ctr';

module.exports = function(ctx, done) {

console.log('Decrypting %s', util.inspect(ctx.data.cypher, {
    color: true
}));

var obj = {
    payload: JSON.parse(decrypt(ctx.data.cypher, ctx.data.CRYPTO_PWD)),
};

done(null, obj);

};

function decrypt(text, password) {
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}