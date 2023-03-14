function echo(objectToEcho) {
    let result = '';
	for (let key in objectToEcho){
		result += key + ': ' + objectToEcho[key] + ', '  
	}
	alert(result);
}

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

echo(user);
Object.assign(user, permissions1, permissions2);
echo(user);