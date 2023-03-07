let enteredNumber = 0;

while (enteredNumber <= 100 && enteredNumber != null) {
  enteredNumber = prompt("Enter number that are more than 100", "");
}

alert( `You entered: ${enteredNumber}!` );