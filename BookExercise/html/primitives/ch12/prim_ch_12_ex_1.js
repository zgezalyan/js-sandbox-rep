let user = {
  name: "Василий Иванович",
  age: 35
};

let jsTest = JSON.stringify(user);
alert (jsTest);

let parseTest = JSON.parse(jsTest);
for (let entry in parseTest){
	alert(`${entry} : ${parseTest[entry]}`);
}