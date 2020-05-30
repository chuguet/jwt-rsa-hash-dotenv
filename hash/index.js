const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const password = '1234';
const salt = process.env.SALT;
// const uuid = uuidv4();
const uuid = '8bebbb64-393f-4176-a6cb-7b00e1a28dcb';

//This should be on server side and we should use it once pass is decrypted with rsa/index to store pass in DB securely
console.log(`Pass: ${password}`);
console.log(`Uuid: ${uuid}`);
const seed = crypto.createHash('sha256').update(`${uuid}${salt}`, 'utf8').digest('base64');
console.log(`Seed: ${seed}`);
const hashedPassword = crypto.createHash('sha256').update(`${password}${seed}`, 'utf8').digest('base64');
console.log(`Hashed pass: ${hashedPassword}`);