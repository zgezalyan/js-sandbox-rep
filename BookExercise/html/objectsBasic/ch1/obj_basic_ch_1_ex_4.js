function multiplyNumeric(objectToMultiply){
    for (key in objectToMultiply){
        if (typeof objectToMultiply[key] == 'number') {
            objectToMultiply[key] *= 2;
        }
    }
    return objectToMultiply;
}

function echo(objectToEcho) {
    let result = '';
    for (let key in objectToEcho){
        result += key + ': ' + objectToEcho[key] + ', '  
    }
    alert(result);
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

echo(menu);
echo(multiplyNumeric(menu));