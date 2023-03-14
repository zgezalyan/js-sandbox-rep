let user = {};

function echo(objectToEcho) {
    let result = '';
	for (let key in objectToEcho){
		result += key + ': ' + objectToEcho[key] + ', '  
	}
	alert(result);
}

user['name'] = 'John';
echo(user);
user['surname'] = 'Smith';
echo(user);
user['name'] = 'Pete';
echo(user);
delete user['name'];
echo(user);