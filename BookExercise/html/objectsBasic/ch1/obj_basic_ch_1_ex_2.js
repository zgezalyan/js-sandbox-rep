let user = {};

function isEmpty(objectToCheck) {
    for (let key in objectToCheck){
		return false;
	}
	return true;
}

alert(isEmpty(user));
user['name'] = 'John';
alert(isEmpty(user));