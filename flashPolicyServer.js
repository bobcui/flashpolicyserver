var argv = require('optimist').argv
var port = argv.p || argv.port || 843

var server = require('policyfile').createServer()

server.listen(port)

process.on('uncaughtException', function(err){})

console.log("Flash policy server has started.\nPlease see on http://0.0.0.0:%s/", port)