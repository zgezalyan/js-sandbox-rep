function countdown(seconds) {
	let intervalId = setInterval(() => {
		seconds -= 1;
		console.log(seconds + ' seconds left');
		if(seconds <= 0){
			clearInterval(intervalId); // Clear the interval after 5 times.
		}
	}, 1000);
}

countdown(5);

