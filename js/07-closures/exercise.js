const printName = () => {
  const helloName = "Hello John";
  const inner = () => console.log(helloName);
  setTimeout(inner, 1000);
};

printName();
