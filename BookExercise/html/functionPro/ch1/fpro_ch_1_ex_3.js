function fib(n) {
	//return n == 1 || n == 2 ? 1 : fib(n - 1) + fib(n - 2);
	let cur = 0;
	let res = 1;	
	for (let i = 2; i <= n; i++) {
		let old = res;
		res += cur;
		cur = old;	
	}
	return res;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757