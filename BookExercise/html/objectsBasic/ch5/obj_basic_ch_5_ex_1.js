function Calculator() {
	this.read = function() {
		this.firstNumber = +prompt("Enter first number");
		this.secondNumber = +prompt("Enter second number");
	};
	this.sum = function() {
		return this.firstNumber + this.secondNumber;
	};
	this.mult = function() {
		return this.firstNumber * this.secondNumber;
	};
}

let calculator = new Calculator();
calculator.read();
alert( calculator.sum() );
alert( calculator.mult() );