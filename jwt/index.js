require('dotenv').config();
const jwt = require('jsonwebtoken');

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const payload = {foo: 'bar'};
console.log(`Payload to sign: ${JSON.stringify(payload)}`);
const token = jwt.sign(payload, privateKey, { algorithm: 'RS512' }); // This line should be in main server
console.log(`Signed token: ${token}`);
const decoded = jwt.verify(token, publicKey, { algorithm: 'RS512' }); //This line should be in trusted server to verify the token
console.log(`Decoded token: ${JSON.stringify(decoded)}`);
