function readNumber(){
	let res;
	
	do {
		res = prompt('Enter number', '')
	} while (!isFinite(res))
	
	if (res === null || res === '') return null;
	
	return res;
}

alert(readNumber());