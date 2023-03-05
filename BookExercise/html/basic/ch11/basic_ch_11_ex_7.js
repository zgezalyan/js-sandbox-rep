let login;
let pass;

login = prompt('Enter username', '')

if (login == 'admin') {
	pass = prompt('Enter pasword', '')
	if (pass == 'main') {
		alert('Welcome!')
	}
	else if (pass == null) {
		alert('Canceled')
	}
	else {
		alert('Wrong password!')
	}
}
else if (login == null) {
	alert('Canceled')
}
else {
	alert('Unknowned')
}