function Object(firstName, lastName, age, id) {
  // let this = {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.id = id;
  // return this
}

let newObj = new Object("Joe", "K.", 30, 80999932);

console.log(newObj);
