function printHello(callback) {
  let counter = 0;
  let myInterval = setInterval(() => {
    callback();
    counter++;
    if (counter > 4) {
      clearInterval(myInterval);
    }
  }, 1000);
}

printHello(() => console.log("Hakan"));
