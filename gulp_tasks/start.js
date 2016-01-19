var spawn = require('child_process').spawn;
var packJson = require('../package');
console.log('starting node server at: '+packJson.start);
var start = spawn('node',[packJson.start]);
console.log('pleased visited  http://localhost:3002');