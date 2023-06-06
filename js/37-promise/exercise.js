const number = 15;

const promise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve("success");
  } else {
    reject("reject");
  }
});

promise.then((e) => console.log(e)).catch((r) => console.log(r));
