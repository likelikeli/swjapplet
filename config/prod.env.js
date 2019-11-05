'use strict'
let HOST = process.argv.splice(2)[0] || '';
console.log(HOST);
module.exports = {
  NODE_ENV: '"production"',
  HOST: '"'+HOST+'"'
}
