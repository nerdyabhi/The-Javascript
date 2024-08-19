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
