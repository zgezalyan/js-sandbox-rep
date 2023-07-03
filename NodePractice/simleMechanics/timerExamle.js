setTimeout(() => { 
  console.log('Executes after two seconds');
}, 2000);

let count = 0;
let intervalId = setInterval(() => {
  count += 1;
  console.log('Executes every half of a second second');
  if(count >= 5){
    clearInterval(intervalId); // Clear the interval after 5 times.
  }
}, 500);