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

//--------- Fourth Solution ------------------

const printName4 = () => {
  const helloName4 = "Hello John 4";
  const inner4 = () => console.log(helloName4);
  return { inner4 };
};

printName4().inner4();

//----------- Fifth Solution ------------------

const printName5 = () => {
  const helloName5 = "Hello John 5";
  const inner5 = () => console.log(helloName5);
  inner5();
};

printName5();
