// browser => window => global object

// Node.js => no window global object

// __dirname => path to the current directory
// __filename => filename
// require() => function to use modules
// module => info about current module
// process => info about env where the program is being executed

console.log(__dirname); // D:\REACT\Backend 2022\1-Node-Intro
console.log(__filename); // D:\REACT\Backend 2022\1-Node-Intro\2-globals.js
console.log(module.filename); // D:\REACT\Backend 2022\1-Node-Intro\2-globals.js
console.log(module.path); //D:\REACT\Backend 2022\1-Node-Intro
console.log(module.exports); // {}

setInterval(() => {
  console.log(module.exports);
}, 1000);
