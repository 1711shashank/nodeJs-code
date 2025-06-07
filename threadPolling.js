// Thread polling
const crypto = require('node:crypto');

crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 1')
});
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 2')
});
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 3')
});
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 4')
});
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 5')
});
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 6')
});
crypto.pbkdf2('secret', 'salt', 5000000, 50, 'sha512', (error, key) => {
    console.log('Key is generated 7')
});




