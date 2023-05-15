//----------- First Solution ------------------

const printName = () => {
  const helloName = "Hello John";
  const inner = () => helloName;
  return { inner };
};

console.log(printName().inner());

//------------ Second Solution ------------------

const printName2 = () => {
  const helloName2 = "Hello John 2";
  const inner2 = () => helloName2;
  return inner2();
};

console.log(printName2());

//--------- Third Solution ------------------

const printName3 = () => {
  const helloName3 = "Hello John 3";
  const inner3 = () => helloName3;
  return inner3;
};

console.log(printName3()());
