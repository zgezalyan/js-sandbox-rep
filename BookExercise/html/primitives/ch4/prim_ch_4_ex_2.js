function sumInput(){
	let arr = [];
	let sum = 0;
	
	while (true) {
		let entered = prompt('Enter number');
		if (entered === '' || entered === null || !isFinite(entered)) break;
		arr.push(+entered);
	}
	
	for (let number of arr){
		sum += number;
	} 
	
	return sum;
}

alert(sumInput());