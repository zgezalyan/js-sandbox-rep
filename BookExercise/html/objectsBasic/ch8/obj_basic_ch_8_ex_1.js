let user1 = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
alert(user1); // hint: string -> {name: "John"}
alert(+user1); // hint: number -> 1000
alert(user1 + 500); // hint: default -> 1500

let user2 = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  }

};

alert(user2); // toString -> {name: "John"}
alert(+user2); // valueOf -> 1000
alert(user2 + 500); // valueOf -> 1500