console.log('Start');

setTimeout(() => { // A timer
  console.log('Timeout 1');
}, 0);

setImmediate(() => { // Check phase
  console.log('Immediate 1');
});

process.nextTick(() => { // A nextTick
  console.log('Next Tick');
});

console.log('End');