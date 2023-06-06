const isLogged = true;

const promise1 = function (logged) {
  return new Promise((resolve, reject) => {
    if (logged) {
      resolve(Math.random());
    } else {
      reject(new Error("Is not logged!"));
    }
  });
};

const promise2 = function (val) {
  return new Promise((resolve, reject) => {
    if (val > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error(`Number is smaller than 0.5. Number is ${val}`));
    }
  });
};

let result = promise1(isLogged)
  .then((val) => {
    return promise2(val);
  })
  .then((e) => console.log(e))
  .catch((c) => console.error(c))
  .finally(function () {
    console.log("Finally 39 excercises are done!");
  });
