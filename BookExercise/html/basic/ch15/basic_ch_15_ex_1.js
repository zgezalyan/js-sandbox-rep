function checkAge(age) {
  return age > 18 || confirm('Need allow')
}

alert(checkAge(prompt("Enter age", "")))