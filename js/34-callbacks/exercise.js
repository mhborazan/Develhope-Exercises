function printHello() {
  console.log("Hello");
}

function printAsyncName(callback, name) {
  setInterval(() => {
    printHello();
  }, 1000);
  setInterval(() => {
    console.log(name);
  }, 2000);
}

printAsyncName(printHello, "Hakan");
