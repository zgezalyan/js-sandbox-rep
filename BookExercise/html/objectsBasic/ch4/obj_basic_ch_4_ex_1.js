let calculator = {
	read() {
		this.firstNumber = +prompt("Enter first number");
		this.secondNumber = +prompt("Enter second number");
	},
	sum () {
		return this.firstNumber + this.secondNumber;
	},
	mult () {
		return this.firstNumber * this.secondNumber;
	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mult() );