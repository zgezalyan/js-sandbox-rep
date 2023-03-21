function aclean(arr) {
  let res = new Map();  
  for (let word of arr) {	   
	  res.set(word.toLowerCase().split("").sort().join(""), word);	    
  }
  return Array.from(res.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"