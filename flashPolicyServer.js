var server = require('policyfile').createServer()

server.listen()

process.on('uncaughtException', function(err){})

console.log("Flash policy server has started.\nPlease see on http://127.0.0.1:843/")