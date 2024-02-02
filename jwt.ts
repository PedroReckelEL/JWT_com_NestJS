// Código responsável pela geração do token JWT:

const crypt = require('crypto');

const header = {
    alg: 'HS256', // Hmac + sha256
    typ: 'JWT',
};

// Corpo de dados -> Dados principais do token
const payload = {
    username: 'user1@user.com',
    name: 'Pedro Reckel',
    exp: new Date().getTime, // timestamp 
}

const key = 'abcd123456';

const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64');
const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64');

// console.log(headerEncoded, payloadEncoded);

const signature =  crypt.createHmac('sha256', key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('bin');

const base64Url = require('base64-url');

console.log(`${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`);