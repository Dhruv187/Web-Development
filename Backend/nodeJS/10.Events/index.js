//! Event-Driven Programming in Node.js

//!Node.js is built on an event-driven architecture where the flow of the program is determined by events (user actions, I/O, etc.).

//! Key Concepts:

//* Event Loop: Handles asynchronous operations in a non-blocking way.

// *EventEmitter: A core Node.js class that allows you to emit and handle custom events

const eventsEmitter = require("events");

const events = new eventsEmitter();

//* listen
events.on("paramsfunc", (name, age) => {
  console.log(`my name is ${name}and age is ${age}`);
});

//* response
events.emit("paramsfunc", "john", 27);
