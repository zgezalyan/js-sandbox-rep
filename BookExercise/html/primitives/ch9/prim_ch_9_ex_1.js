function sumSalaries(salaries) {
	//Realization with reduce:
	//return Object.values(salaries).reduce((a, b) => a + b, 0);
	res = 0
	for (let value of Object.values(salaries)) {
		res += value;
	}
	return res;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650