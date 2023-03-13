function pow(x, n) {
  let res = x
  for (let i = 1; i < n; i++){
	  res *= x
  }
  return res
}

alert(pow(prompt("Number"), prompt("Pow rank")))