var util = require("util");

console.log("Current Directory: " + process.cwd()); // current working directory method
console.log("Environment Settings: " + JSON.stringify(process.env)); // contains key/value pairs specified
console.log("Node Args: " + process.argv);
console.log("Execution Path: " + process.execPath);
console.log("Execution Args: " + JSON.stringify( process.execArgv ));
console.log("Node Version: " + process.version);
console.log("Process ID: " + process.pid); // current process' id
console.log("Process Title: " + process.title);
console.log("Process Platform: " + process.platform);
console.log("Process Architecture: " + process.arch);
console.log("Memory Usage: " + util.inspect(process.memoryUsage()));
var start = process.hrtime();

setTimeout(function() {
  var delta = process.hrtime(start);
  console.log("Hi-res timer took %d seconds and %d nanoseconds", delta[0], +delta[1]);
  console.log("Node has been running %d seconds", process.uptime());
}, 1000);
