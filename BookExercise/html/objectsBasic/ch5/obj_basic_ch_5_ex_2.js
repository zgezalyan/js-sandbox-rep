function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += +prompt("Enter adding number");		
	};	
}

let acc = new Accumulator(1);
alert( acc.value );
acc.read();
alert( acc.value );
acc.read();
alert( acc.value );