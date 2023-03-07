let lastNumber = 100;
let result = "2 ";

for (let i = 3; i <= lastNumber; i++){
	for (let j = 2; j < i; j++){
		if (i % j == 0) break;
		if (j == i - 1) result += i + " "; 		
	}	
}

alert(result);