function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

//arrow function is shorter
repeatHello(() => console.log("Hello"));

//------------------------------------------- others
repeatHello(function () {
  console.log("hi");
});
//--------------------------
function outside() {
  console.log("whats up");
}
repeatHello(outside);
