function camelize(str){
	res = str.split("-");
	if (res.length > 1){
		res = [res[0]].concat(res.slice(1).map(item => item[0].toUpperCase() + item.slice(1)));
		res = res.join("");
	}
	return res;
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));