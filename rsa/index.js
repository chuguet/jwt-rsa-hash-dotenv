require('dotenv').config();
const RSA = require('node-rsa');

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const pass = '1234';
console.log(`Pass: ${pass}`);
const encryptor = new RSA(publicKey);
const passEncrypted = encryptor.encrypt(pass, 'base64'); // This should be on client side
console.log(`Pass encrypted: ${passEncrypted}`);

const decryptor = new RSA(privateKey);
const passDecrypted = decryptor.decrypt(passEncrypted); // This should be on server side
console.log(`Pass decrypted: ${passDecrypted}`);