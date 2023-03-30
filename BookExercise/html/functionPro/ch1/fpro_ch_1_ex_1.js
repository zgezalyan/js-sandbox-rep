function sumTo1(n){
	sum = 0
	for (let i = 0; i <= n; i++){
		sum += i;
	}
	return sum;
}

function sumTo2(n){
	return n == 1 ? 1 : n + sumTo2(n - 1);
}

function sumTo3(n){
	return (n + 1) * (n / 2);
}

alert( sumTo1(100) );
alert( sumTo2(100) );
alert( sumTo3(100) );