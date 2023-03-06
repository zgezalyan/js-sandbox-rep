let result = "";

for (let i = 0; i <= 10; i++){
	if (i % 2 != 0) continue;
	result += i + " ";
}

alert(result)