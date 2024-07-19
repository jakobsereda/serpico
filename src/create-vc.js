const jose = require('jose')
require('dotenv').config()

/**
 * ENVIRONMENT VARIABLES:
 * ======================
 *   - PEM_PRIVATE_KEY: private key in .pem format
 *   - PEM_PUBLIC_KEY: public key in .pem format
 */

console.log(process.env.PEM_PRIVATE_KEY);
console.log(process.env.PEM_PUBLIC_KEY);

