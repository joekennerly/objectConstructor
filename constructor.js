// Using () => doesn't evoke a function scope for "this"

function createObject(firstName, lastName, age, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.id = id;
}

// The "new" keyword tells JS to create a variable called "this", 
// which is an obj, and return it after paramaters are entered

let newObj = new createObject("Joe", "K.", 30, 80999932);

console.log(newObj);
