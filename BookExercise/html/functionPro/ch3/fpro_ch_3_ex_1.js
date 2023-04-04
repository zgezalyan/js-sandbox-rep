function sum(first){
	return function inner (second) {
		return first + second;
	};
}

alert(sum(1)(2))