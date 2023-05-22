function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return value * 2;
  }
  return inner;
}

console.log(multiplyByTwo(4)());
