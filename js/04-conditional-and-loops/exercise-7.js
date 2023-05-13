function sumUntil(maxValue) {
  let sum = 0;
  for (let i = 1; i <= maxValue; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumUntil(5));

function gaussSum(maxValue) {
  return (maxValue * (maxValue + 1)) / 2;
}

console.log(gaussSum(5));
