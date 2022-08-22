// EventEmitter is a class
const EventEmitter = require("events");

let emitter = new EventEmitter();

// on and emit
// on() => create an event
// emit() => execute the event

// on()
// Syntax
// emitter.on('eventName', listener) // listener => method
// emitter.on("eventName", () => {
// listener logic
// })
// Method - 1
// let displayName = (firstName, lastName) => {
//   console.log(firstName, lastName);
// };
// emitter.on("displayUser", displayName);

// Method - 2
emitter.on("displayUser", (firstName, lastName) => {
  console.log(firstName, lastName);
});

// emit()
// Syntax
// emitter.emit("eventName", "eventArg-1", ..., "eventArg-N")
emitter.emit("displayUser", "John", "Jack");

emitter.on("displayMessage", () => {
  console.log("Welcome to EventEmitter Class");
});

emitter.emit("displayMessage");
