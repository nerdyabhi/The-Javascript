const user = {
  userName: 'Abhi Sharma',

  makeAbhiSmile: function () {
    console.log('Abhi is smiling');
  },
};

// constructor function in js
function User(username, age, isHappy) {
  this.username = username;
  this.age = age;
  this.isHappy = isHappy;

  this.getData = function () {
    console.log(
      `Username  : ${this.username}\n Age : ${this.age}\n , isHappy:${this.isHappy} `
    );
  };
}

const abhi = new User('Abhi Sharma', 18, false);
console.log(typeof abhi); // abhi ko object banado!
abhi.getData();


/*  
    When you use the new keyword in JavaScript, it does a few things behind the scenes:

    Creates a new object: A new empty object is created.
    Links to the prototype: The new object is linked to the prototype of the constructor function.
    Binds this: The this keyword inside the constructor function is bound to the new object.
    Returns the object: The new object is returned automatically unless the constructor function returns a different object explicitly.
*/
