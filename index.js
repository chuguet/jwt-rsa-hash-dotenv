require('dotenv').config();
const jwt = require('jsonwebtoken');

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS512' });
console.log(jwt.verify(token, publicKey, { algorithm: 'RS512' }));
