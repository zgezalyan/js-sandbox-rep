let range = {
  from: 1,
  to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// теперь работает!
for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}

for (let char of "test") {
  // срабатывает 4 раза: по одному для каждого символа
  alert( char ); // t, затем e, затем s, затем t
}

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr1 = Array.from(arrayLike); // (*)
alert(arr1.pop()); // World (метод работает)

let arr2 = Array.from(range, num => num * num);

alert(arr2); // 1,4,9,16,25