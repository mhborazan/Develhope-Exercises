const order = {};

if (!("city" in order)) {
  console.log("City is required");
}

if ("city" in order === false) {
  console.log("City is required");
}

if (!order.hasOwnProperty("city")) {
  console.log("City is required");
}

//-----------------------------------------------//

if (!order.customer?.address?.city) {
  console.log("City is required");
}
