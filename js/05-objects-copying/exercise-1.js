const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//Both persons names has changed, its because objects assigntmens only refer to the original object.
//If we want to create a new copy we can use const person2 = Object.assign(person1)
