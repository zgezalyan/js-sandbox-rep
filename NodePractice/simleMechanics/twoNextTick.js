console.log('Start');

process.nextTick(() => { // A nextTick
  console.log('First Tick');
});

process.nextTick(() => { // A nextTick
  console.log('Second Tick');
});

console.log('End');