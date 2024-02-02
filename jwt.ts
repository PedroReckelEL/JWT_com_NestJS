// Código responsável pela geração do token JWT:

const crypt = require('crypto');
const base64Url = require('base64-url');

const header = {
    alg: 'HS256', // Hmac + sha256
    typ: 'JWT',
};

// Corpo de dados -> Dados principais do token
const payload = {
    username: 'user1@user.com',
    name: 'Pedro Reckel',
    exp: new Date().getTime(), // timestamp corrigido
}

const key = 'abcd123456';

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

const signature = crypt.createHmac('sha256', key)
    .update(`${headerEncoded}.${payloadEncoded}`)
    .digest('base64'); // corrigido para 'base64'

const jwtToken = `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`;

console.log(jwtToken);