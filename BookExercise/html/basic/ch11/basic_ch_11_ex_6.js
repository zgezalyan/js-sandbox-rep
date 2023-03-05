let login;
let message;

age = prompt('Введите возраст', '')

if (!(age >= 14 && age <= 90)){
	alert('age is ok')
}
else{
	alert('age is not ok')
}

if (age < 14 || age > 90){
	alert('age is ok')
}
else{
	alert('age is not ok')
}